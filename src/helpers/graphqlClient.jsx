import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  split,
  from,
  InMemoryCache,
} from "@apollo/client";
import {getMainDefinition, Observable} from "@apollo/client/utilities";
import {onError} from "@apollo/client/link/error";
import {MockLink} from "@apollo/client/testing";
import {setContext} from "@apollo/client/link/context";
import {createClient} from "graphql-ws";
import {FLIGHTS_QUERY} from "../containers/FlightDirector/Welcome/Welcome";
import {getClientId} from "helpers/getClientId";
import {publish} from "./pubsub";
import {print} from "graphql";
// import * as Sentry from "@sentry/browser";

const hostname = window.location.hostname;
const protocol = window.location.protocol;
const wsProtocol = protocol === "https:" ? "wss:" : "ws:";
export const graphqlUrl =
  process.env.NODE_ENV === "production"
    ? "/graphql"
    : `${protocol}//${hostname}:${
        parseInt(window.location.port || 3000, 10) + 1
      }/graphql`;

const websocketUrl =
  process.env.NODE_ENV === "production"
    ? `${wsProtocol}//${window.location.host}/graphql`
    : `${wsProtocol}//${hostname}:${
        parseInt(window.location.port || 3000, 10) + 1
      }/graphql`;

const graphqlWsClient = createClient({
  url: websocketUrl,
  lazy: true,
  retryAttempts: Infinity,
  connectionParams: async () => {
    const clientId = await getClientId();
    return {clientId};
  },
});

const webSocketLink = new ApolloLink(
  operation =>
    new Observable(observer =>
      graphqlWsClient.subscribe(
        {
          query: print(operation.query),
          variables: operation.variables,
          operationName: operation.operationName,
        },
        observer,
      ),
    ),
);

const wsLink = ApolloLink.from([
  onError(args => {
    const {response, graphQLErrors, networkError} = args;
    if (graphQLErrors) {
      graphQLErrors.forEach(error => {
        const {message, locations, path} = error;
        console.error(
          `[Subscription Error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );
        // Sentry.captureException(error);
      });
    }

    if (networkError) {
      console.error(`[Network error]: `, networkError);
      // Sentry.captureException(networkError);
    }
    if (response) response.errors = null;
  }),
  webSocketLink,
]);

const headersMiddleware = setContext((operation, {headers}) => {
  const core = window.location.pathname.includes("/core");
  return getClientId().then(clientId => ({
    headers: {...headers, clientId, core},
  }));
});

const mutationMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const opDef = operation.query.definitions.find(
    d => d.kind === "OperationDefinition" && d.operation === "mutation",
  );

  if (opDef) {
    const selection = opDef.selectionSet.selections[0];
    if (!selection || selection.kind !== "Field") {
      return forward(operation);
    }
    const event = selection.name?.value;
    const variables = Object.keys(operation.variables).reduce((acc, key) => {
      const _acc = acc;
      if (operation.variables[key] !== undefined)
        _acc[key] = operation.variables[key];
      return _acc;
    }, {});
    try {
      if (event) {
        publish("mutation-event", {event, args: variables});
      }
    } catch {
      // Swallow the error
    }
  }

  return forward(operation);
});

const httpLink = ApolloLink.from([
  onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      graphQLErrors.map(({message, locations, path}) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
    if (networkError) console.error(`[Network error]:`, networkError);
  }),
  mutationMiddleware,
  process.env.NODE_ENV === "test"
    ? new MockLink([{request: {query: FLIGHTS_QUERY}}])
    : new HttpLink({
        uri: graphqlUrl,
        opts: {
          mode: "cors",
        },
      }),
]);

const link = split(
  // split based on operation type
  ({query}) => {
    const {kind, operation} = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache({
  dataIdFromObject(node) {
    if (node.id && node.__typename && node.count) {
      return node.__typename + node.id + node.count;
    }
    if (node.id && node.__typename) {
      return node.__typename + node.id;
    }
    return null;
  },
  typePolicies: {
    Thorium: {
      keyFields: false,
    },
    Subscription: {
      fields: {
        clientChanged: {
          merge(_existing, incoming) {
            return incoming;
          },
        },
      },
    },
    Simulator: {
      fields: {
        ship: {
          merge(existing = {}, incoming = {}) {
            return {...existing, ...incoming};
          },
        },
        crewCount: {
          read(existing = 0) {
            return existing;
          },
        },
      },
    },
    Query: {
      fields: {
        thorium: {
          merge(existing = {}, incoming = {}) {
            return {...existing, ...incoming};
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: from([headersMiddleware, link]),
  assumeImmutableResults: true,
  // use restore on the cache instead of initialState
  cache: cache.restore(window.__APOLLO_CLIENT__),
  ssrMode: true,
  ssrForceFetchDelay: 100,
  devtools: {enabled: true},
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});

export default client;
