import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  const url = 'mongodb://db';
  const connection = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
  });
  return connection.connection.db;
};
