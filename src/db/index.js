import mongoose from 'mongoose';

const connectDb = async () => {
  const connectionUrl = process.env.MONGOOSE_DB;

  mongoose
  .connect(connectionUrl)
  .then(() => console.log("db connection is successfull"))
  .catch((error) => console.log(error));
};

export default connectDb;