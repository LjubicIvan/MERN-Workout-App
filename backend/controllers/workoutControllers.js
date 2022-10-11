const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')

//get all workout
const getWorkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createadAt:-1})

    res.status(200).json(workouts)
}


//jednu vjezbu
const getWorkout=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"nema vjezbe"})
    } 

    const workout=await Workout.findById(id)

    if(!workout){
        return res.status(400).json({error:'nema vjezba'})

    }
    res.status(200).json(workout)
}


//nova vjezba
const createWorkout=async(req,res)=>{
    const{title,load,reps}=req.body

    try{
        const workout=await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error:error.message})
    }
    
}

//delete vjezbu
const deleteWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"nema vjezbe"})
    } 

    const workout=await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({error:'nema vjezba'})

    }
    res.status(200).json(workout)

}


//update
const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"nema vjezbe"})
    } 

    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error:'nema vjezba'})

    }
    res.status(200).json(workout)
}



module.exports={
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}