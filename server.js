// import mongoose from "mongoose";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
// config env
dotenv.config();
// database
connectDB();

//Es6 module Fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// rest object
const app = express();
// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));
//Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/product-filters", productRoutes);

// Rest api
// app.get("/", (req, res) => {
//   res.send({
//     Message: "Welcome to Ecommerce App",
//   });
// });
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
// PORT
const PORT = process.env.PORT || 5000;
// run listen
app.listen(PORT, () => {
  console.log(`server is running on 5000`);
});
