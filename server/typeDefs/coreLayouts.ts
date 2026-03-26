import App from "../app";
import {gql} from "graphql-tag";
import {withFilter} from "graphql-subscriptions";
import {pubsub} from "../helpers/subscriptionManager";
import mutationHelper from "../helpers/mutationHelper";
// We define a schema that encompasses all of the types
// necessary for the functionality in this file.
const schema = gql`
  type CoreLayout {
    id: ID
    name: String
    config: String
  }
  input CoreLayoutInput {
    id: ID
    name: String
    config: String
  }
  extend type Query {
    coreLayouts(name: String): [CoreLayout]
  }
  extend type Mutation {
    updateCoreLayout(layout: CoreLayoutInput): String
    addCoreLayout(layout: CoreLayoutInput): String
    removeCoreLayout(id: ID): String
    reorderCoreLayouts(layouts: [ID!]!): String
  }
  extend type Subscription {
    coreLayoutChange: [CoreLayout]
  }
`;

const resolver = {
  Query: {
    coreLayouts() {
      return App.coreLayouts.map((c, i) => ({...c, order: i}));
    },
  },
  Mutation: mutationHelper(schema),
  Subscription: {
    coreLayoutChange: {
      resolve(rootValue) {
        return rootValue;
      },
      subscribe: withFilter(
        () => pubsub.asyncIterableIterator("coreLayoutChange"),
        rootValue => {
          return !!(rootValue && rootValue.length);
        },
      ),
    },
  },
};

export default {schema, resolver};
