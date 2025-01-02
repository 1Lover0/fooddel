import foodModel from "../models/foodModel.js";
import fs from 'fs';


// add food item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    console.log(image_filename);

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: "Food not Added"})
    }

} 



// all food list

const listFood = async (req, res) => {
    try {

        const food = await foodModel.find({});
        res.json({success: true, data:food})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"});
    }
}

// remove food item 

const removeFood = async (req, res) => {

    try {
        
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food Removed"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Food was not Removed "})
    }

}



export {addFood, listFood, removeFood};
