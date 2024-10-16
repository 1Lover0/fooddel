import userModel from '../models/userModel.js'

// add Cart 
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        // console.log(req.body.itemId);
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        const sData = await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message: "Added to Cart"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// remove cart
const removeToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;

        if (!cartData[req.body.itemId]==0) {
            cartData[req.body.itemId] -= 1
        }

        const sData = await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        console.log(sData);
        
        res.json({success:true,message:"Remove from Cart"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})   
    }
}

// fetch cart data
const getToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        console.log(cartData);
        res.json({success:true, cartData})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"ERROR"})
    }
}

export {addToCart, removeToCart, getToCart}