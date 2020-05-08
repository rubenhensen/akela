import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    // @ts-ignore
    useUnifiedTopology: true,
    useCreateIndex: true,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
  });
  return connection.connection.db;
};
