import express from 'express'
import cors from 'cors'



// app config 

const app = express();
const port = 4000;

// middleware 
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})



//  mongodb+srv://userdeepu:9990029488deepu@cluster0.m2l86fd.mongodb.net/auth1?retryWrites=true&w=majority&appName=Cluster0
//  mongodb+srv://userdeepu:9990029488deepu@cluster0.m2l86fd.mongodb.net/auth1?retryWrites=true&w=majority&appName=Cluster0