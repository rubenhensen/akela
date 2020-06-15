import mongoose from "mongoose";
import { Db } from "mongodb";
import config from "../config";

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
};

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(
    config.databaseURL,
    connectionOptions
  );
  return connection.connection.db;
};
