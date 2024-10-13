import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';



// app config
const app  = express()
const port  = 4000


//middleware
app.use(express.json())
app.use(cors())


// db connection
connectDB()


// api endpoints 
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))



app.get('/', (req, res)=>{
    res.end("new")
})


app.listen(port, ()=> {
    console.log(`Server Started on http://localhost:${port}`);
})