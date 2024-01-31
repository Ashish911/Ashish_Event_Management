import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://ashishdongol32:123123123@ashishcluster01.ymfdcah.mongodb.net/?retryWrites=true&w=majority";

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  console.log("Cached", cached.promise);

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
