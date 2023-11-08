import { NextFunction,Request,Response } from "express";
import User from "../model/user.model.js";


const userVali = async (req:Request,res:Response,next:NextFunction) =>{
    if(!req.body.name){
        return res.status(400).send({
            msg:"Enter Your Name",
        });
    };

    if(!req.body.email){
        return res.status(400).send({
            msg:"Enter Your Email",
        });
    };
    let email = await User.findOne({email:req.body.email});
    
    if(email != null){
        return res.status(400).send({message:"Email already exists"});
    };


    if(!req.body.password){
        return res.status(400).send({
            msg:"Enter Your password",
        });
    };

    next();
};

export default {
    userVali
}