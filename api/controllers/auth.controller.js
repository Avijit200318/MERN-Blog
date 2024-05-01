import userModel from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandle } from "../utils/error.js";

export const signUp = async function(req, res, next) {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        return next(errorHandle(400, "All filds are required"));
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({username, email, password: hashPassword});
    try{
        await newUser.save();
        res.status(201).json("user created successfully");
    }catch(error){
        next(error);
    }
};