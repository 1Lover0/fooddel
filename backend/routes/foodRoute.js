import express from "express";
import multer from "multer";
import { addFood } from "../controller/foodController.js";


const foodRouter = express.Router();


// multer store Engine

const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req, file, callBack) => {
        return callBack(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add", upload.single("image"), addFood)





export default foodRouter;