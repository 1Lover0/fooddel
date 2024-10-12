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

export {addFood};