import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req, res) => {

    const bodys = req.body

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: bodys.name,
        description: bodys.description,
        price: bodys.price,
        category: bodys.category,
        image: image_filename
    })
    try {
        await food.save()
        res.json({success: true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }

}

// show all food
const listFodd = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})        
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Food Removed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addFood, listFodd, removeFood};