import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';



// app config 

const app = express();
const port = 4000;

// middleware 
app.use(express.json())
app.use(cors())

// db connection
connectDB();



// API endpoints
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))


app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})



//  mongodb+srv://userdeepu:9990029488deepu@cluster0.m2l86fd.mongodb.net/auth1?retryWrites=true&w=majority&appName=Cluster0
//  mongodb+srv://userdeepu:9990029488deepu@cluster0.m2l86fd.mongodb.net/auth1?retryWrites=true&w=majority&appName=Cluster0