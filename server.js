import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js"; 
import courseRoutes from "./routes/courseRoutes.js"; 
// import { authErrorHandler } from "./middlewares/auth.js"; // no longer needed

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// app.use(authErrorHandler); // removed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
