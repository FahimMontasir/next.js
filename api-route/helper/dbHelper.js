import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://shakil:shakilkhan@cluster0.1znel.mongodb.net/newsletterEmails?retryWrites=true&w=majority";

const connectDatabase = async () => {
  const client = await MongoClient.connect(uri);

  return client;
};

const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();

  const document = await db.collection(collection).find().sort(sort).toArray();

  return document;
};

export { connectDatabase, insertDocument, getAllDocuments };
