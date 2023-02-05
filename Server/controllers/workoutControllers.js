const workoutDb = require('../models/workout')
const mongoose = require('mongoose')

const getAllWorkout = async (req, res) => {
    const workouts = await workoutDb.find({}).sort({ createdAt: 1 })
    const emptyWorkout = ['']
    if (workouts === emptyWorkout) return res.status(204).json({ 'message': 'No workout found' })
    res.json(workouts)
}

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    if (!title || !load || !reps) return res.status(403).type('txt').send('Enter your latest track progress')
    try {
        const newWorkout = await workoutDb.create({
            "title": title,
            "load": load,
            "reps": reps
        })
        console.log(newWorkout)
        res.status(200).json(newWorkout)
    } catch (error) {
        res.status(400).json({ 'message': error.message })
    }
}

const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!id || !mongoose.Types.ObjectId.isValid(id)) return res.status(404).type('txt').send('ID is required') //for sending mongoose id as url parameter
    const workout = await workoutDb.findById(id).exec()
    if (!workout) return res.status(204).type('txt').send('no workout found')
    res.json(workout)
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'ID is required' })
    const workout = await workoutDb.findByIdAndDelete({ _id: id }).exec()
    if (!workout) return res.status(400).json({ error: 'ID is required' })
    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!id) return res.status(404).type('txt').send('ID is required')
    const workout = await workoutDb.findByIdAndUpdate(id, {
        $set: {
            "title": req.body.title,
            "load": req.body.load,
            "reps": req.body.reps
        }
    })

    if (!workout) res.status(400).json({ 'message': error.message })
    res.status(200).json(workout)

}

module.exports = {
    getAllWorkout,
    createWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
}