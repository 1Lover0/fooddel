import express from "express";
import multer from "multer";
import { addFood, listFodd, removeFood } from "../controller/foodController.js";


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
foodRouter.get("/list",listFodd)
foodRouter.delete("/remove", removeFood)





export default foodRouter;