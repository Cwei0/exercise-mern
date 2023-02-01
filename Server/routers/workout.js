const express =require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({'message': 'Getting all Workouts'})
    })
    .post((req, res) => {
        res.json({message: 'Posting Workouts'})
    })
    .patch((req, res) => {
        res.json({message: 'Updating Workouts'})
    })
    .delete((req, res) => {
        res.json({message: 'Deleting Workouts'})
    })


router.route('/:id')
    .get((req, res) => {
        res.json({'message': 'Get a single workout'})
    })
module.exports = router;
