require("dotenv").config()

const express=require("express")
const workoutRoutes=require("./routes/workouts")
const mongoose=require('mongoose')
//express app pokretanje
const app=express()




//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})



//sve rute iz workout.js
app.use('/api/workouts',workoutRoutes)



//spajanje sa bazom
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //app na portu 4000
    app.listen(process.env.PORT,()=>{
    console.log("Spojen sa bazom i Port aktivan :",process.env.PORT )
})
})
.catch((err)=>{
    console.log(err)
})




