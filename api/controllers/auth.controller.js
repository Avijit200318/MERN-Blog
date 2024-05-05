import userModel from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandle } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signIn = async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password) return next(errorHandle(400, "All fields are required"));
    try{
        const validUser = await userModel.findOne({email});
        if(!validUser) return next(errorHandle(404, "User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandle(401, "Wrong credentials"));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRECT);
        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    }catch(error){
        next(error);
    }
};

export const google = async (req, res, next) => {
    try{
        const user = await userModel.findOne({email: req.body.email});
        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRECT);
            const {password: pass, ...rest} = user._doc;
            res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new userModel({
                username: req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-4),
                email: req.body.email,
                avatar: req.body.avatar,
                password: hashedPassword,
            })
            await newUser.save();
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRECT);
            const {password: pass, ...rest} = newUser._doc;
            res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
        }
    }catch(error){
        next(error);
    }
}