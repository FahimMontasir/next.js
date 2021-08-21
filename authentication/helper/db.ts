import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://shakil:shakilkhan@cluster0.1znel.mongodb.net/next-auth?retryWrites=true&w=majority";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(uri);
  return client;
};
