import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient, Db } from 'mongodb';

let database: Db = null;

const startDatabase = async () => {
  const mongo = await MongoMemoryServer.create();
  const mongodbUrl = mongo.getUri();
  const client = new MongoClient(mongodbUrl);
  if (!database) {
    await client.connect();
    database = client.db();
    await database
      .collection('hello')
      .insertOne({ id: 1, message: 'Hello, World' });
  }

  return database;
};

export { startDatabase };
