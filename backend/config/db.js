const mongoose = require("mongoose");

const LOCAL_URI = "mongodb://127.0.0.1:27017/codeapna";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  try {
    if (!MONGO_URI) {
      console.warn("MONGO_URI not set — attempting local MongoDB...");
      const connLocal = await mongoose.connect(LOCAL_URI);
      console.log(`MongoDB Connected: ${connLocal.connection.host} (local)`);
      return;
    }

    try {
      const conn = await mongoose.connect(MONGO_URI, { family: 4 });
      console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
      return;
    } catch (primaryErr) {
      console.error("Primary MongoDB connection failed:", primaryErr.message);
      console.error("Attempting fallback to local MongoDB...", LOCAL_URI);
      const connLocal = await mongoose.connect(LOCAL_URI);
      console.log(`MongoDB Connected: ${connLocal.connection.host} (local)`);
      return;
    }
  } catch (error) {
    console.error(`❌ DB Error: ${error.message}`);
    console.error(
      "If using MongoDB Atlas, ensure your IP is whitelisted, DNS is available, and the connection string is correct."
    );
    process.exit(1);
  }
};

module.exports = connectDB;
