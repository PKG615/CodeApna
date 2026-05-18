// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import contactRoutes from "./routes/contactRoutes.js";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());



// // ROUTES
// app.use("/api/contact", contactRoutes);
// app.use("/api/contact/:id", contactRoutes);

// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send({
//     activeStatus:true,
//     error:false,
//   });
// });

// // DATABASE
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// // SERVER
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server Running on ${PORT}`);
// });