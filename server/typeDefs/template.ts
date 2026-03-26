import {gql} from "graphql-tag";
import {withFilter} from "graphql-subscriptions";
import {pubsub} from "../helpers/subscriptionManager";
import {v4 as uuidv4} from "uuid";

// We define a schema that encompasses all of the types
// necessary for the functionality in this file.
const schema = gql`
  type Template {
    id: ID
  }
  extend type Query {
    _template(simulatorId: ID!): Template
  }
  extend type Mutation {
    _template: String
  }
  extend type Subscription {
    _templateUpdate(simulatorId: ID): Template
  }
`;

const resolver = {
  Query: {},
  Mutation: {},
  Subscription: {
    _templateUpdate: {
      resolve(rootQuery) {},
      subscribe: withFilter(
        (rootValue, args) => {
          const id = uuidv4();
          process.nextTick(() => {
            const templateData = [];
            pubsub.publish(id, templateData);
          });
          return pubsub.asyncIterableIterator([id, "templateUpdate"]);
        },
        (rootValue, args) => {
          return true;
        },
      ),
    },
  },
};

export default {schema, resolver};
