import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getAllWorkout,
} from "../controllers/workout.controller.js";

const router = express.Router();

router.get("/getall", getAllWorkout);
router.post("/create", createWorkout);
router.delete("/delete/:id", deleteWorkout);

export default router;
