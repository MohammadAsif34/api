import workouts from "../models/workout.model.js";

//create new workout
export const createWorkout = async (req, res) => {
  try {
    const data = req.body;

    const workout = new workouts(data);
    await workout.save();

    res
      .status(200)
      .json({ ok: true, message: "create workout from controller" });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, message: `error found at createWorkout ::: ${err}` });
  }
};

//getting all workouts
export const getAllWorkout = async (req, res) => {
  try {
    const allWorkouts = await workouts.find();
    res
      .status(200)
      .json({ ok: true, message: "gets all workouts", data: allWorkouts });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, message: "error during fetchin all workouts" });
  }
};

// delete workouts
export const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await workouts.findByIdAndDelete(id);

    if (!workout) {
      return res
        .status(404)
        .json({ ok: false, message: "workout not founded" });
    }

    res
      .status(200)
      .json({ ok: false, message: "workout founded", data: workout });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false, message: "error during delete workout" });
  }
};
