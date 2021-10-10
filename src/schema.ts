import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Hello {
    id: ID!
    message: String!
  }

  type Query {
    hello: [Hello!]!
    helloWorld: String!
  }
`);
