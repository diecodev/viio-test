import { MongoClient } from "mongodb";
import { Products, Users } from "../types";

const DB_URL = "mongodb://mongo:27017";
const DB_NAME = "viio-challenge";
const USER_COLLECTION = "users";
const PRODUCTS_COLLECTION = "products";

const client = new MongoClient(DB_URL);

const connectDatabase = async () => {
  await client.connect();
  console.log("Connected successfully to database server");

  return client.db(DB_NAME);
};

const db = await connectDatabase();

const users = db?.collection<Users>(USER_COLLECTION);

export { users, db };
