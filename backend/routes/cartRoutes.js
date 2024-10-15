import express from 'express'
import {addToCart, removeToCart, getToCart} from '../controller/cartController.js'
import auth from '../middleware/auth.js';


const cartRouter = express.Router();

cartRouter.post('/add', auth,addToCart)
cartRouter.post('/remove', auth,removeToCart)
cartRouter.post('/get', auth,getToCart)

export default cartRouter