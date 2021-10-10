import { Db } from 'mongodb';

export const resolvers = {
  hello: async (_: any, context: any) => {
    const db: Db = await context();
    return db.collection('hello').find().toArray();
  },
  helloWorld: () => 'Hello World'
};

