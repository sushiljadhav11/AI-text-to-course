import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js"; 
import courseRoutes from "./routes/courseRoutes.js"; 
import { authErrorHandler } from "./middlewares/auth.js"; 

dotenv.config();

console.log("Auth0 DOMAIN:", process.env.AUTH0_DOMAIN);
console.log("Auth0 AUDIENCE:", process.env.AUTH0_AUDIENCE);

const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use("/api/courses", courseRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


app.use(authErrorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
