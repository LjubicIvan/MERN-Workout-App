//sve Rute

const express=require("express")
const Workout=require('../models/workoutModel')
const router=express.Router()
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout}=require('../controllers/workoutControllers')



//get za sve vjezbe
router.get('/',getWorkouts)

//get za jednu vjezbu
router.get('/:id',getWorkout)

//POST vjezbu
router.post('/',createWorkout)

//deletes
router.delete('/:id',deleteWorkout)

//update vjezbu
router.patch('/:id',updateWorkout)
 

module.exports=router 