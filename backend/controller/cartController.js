import userModel from '../models/userModel.js'

// add Cart 
const addToCart = async (req, res) => {
    try {
        let userData = userModel.findOne({_id:req.body.userId})
        let cartData = await userData.cartData
        if (!cartData[req.body.itemId]) 
        {
            cartData[req.body.itemId] = 1
        } 
        else {
            cartData[req.body.itemId] += 1
        }
        
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message: "Added to Cart"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// remove cart
const removeToCart = async (req, res) => {}

// fetch cart data
const getToCart = async (req, res) => {}

export {addToCart, removeToCart, getToCart}