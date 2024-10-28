import mongoose from "mongoose";

const workoutSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    load_kg: { type: Number, required: true },
    reps: { type: Number, required: true },
  },
  { timestapm: true }
);
const Workout = mongoose.model("workout", workoutSchema);
export default Workout;
