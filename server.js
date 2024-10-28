import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//importing routing
import workoutRoute from "./routes/workout.route.js";

const app = express(); //app creates
app.use(express.json());
app.use(cors()); //enables to communicate with frontend

//connected to mongodb
mongoose
  .connect(process.env.MONGO_API)
  .then(() => {
    console.log(`'connected to mongodb'`);
  })
  .catch((err) => {
    console.log(`cennecting failed to mongodb ::: ${err}`);
  });

// stating route
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to our server" });
});

//createworkout route
app.use("/api", workoutRoute);

//app start
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
