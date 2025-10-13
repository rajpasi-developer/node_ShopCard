import monoogese from "mongoose";

const connectDB = async () => {
  try {
    await monoogese.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
  }
};

export default connectDB;
