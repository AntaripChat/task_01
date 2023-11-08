import { NextFunction,Request,Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import authConfig from "../config/auth.config.js";
import User from "../model/user.model.js";

const secret = authConfig.secret;


const verifyToken = (req:Request,res:Response,next:NextFunction) =>{

    let token:any = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({message:"No Token Provided"});
    }

    jsonwebtoken.verify(token,secret,(err:any,payload:any) => {

        if(err){
            return res.status(403).send({message:"Invalid JWT token"});
        }

        req.body.email = payload.email;
        next();
    })
};

export default verifyToken;