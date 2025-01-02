import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://userdeepu:9990029488deepu@cluster0.m2l86fd.mongodb.net/fooddel').then(()=>console.log("DB Connected Succesfully"))
}