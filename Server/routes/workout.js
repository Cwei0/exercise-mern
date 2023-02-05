const express =require('express');

const router = express.Router();
const workoutControllers = require('../controllers/workoutControllers')

router.route('/')
    .get(workoutControllers.getAllWorkout)
    .post(workoutControllers.createWorkout)


router.route('/:id')
    .get(workoutControllers.getWorkout)
    .delete(workoutControllers.deleteWorkout)
    .patch(workoutControllers.updateWorkout)

module.exports = router;

