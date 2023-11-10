import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONOGO_URI!);
    console.log('Connected to Mongo');
  } catch (err) {
    console.log(err);
  }
};
