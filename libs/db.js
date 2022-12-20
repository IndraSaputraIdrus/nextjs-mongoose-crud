import mongoose from "mongoose";

const connect = async () => {
  const status = mongoose.connection.readyState;
  if (status > 0) {
    return;
  }

  const uri = process.env.MONGO_URI;
  mongoose.connect(uri, {
    dbName: process.env.DB_NAME,
  });
};

const disconnect = () => {
  return new Promise((resolve) => resolve(mongoose.disconnect()));
};

const db = mongoose.connection;

export default db;
export { connect, disconnect };
