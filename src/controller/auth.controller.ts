import { Request,Response } from "express";
import User from "../model/user.model.js";
import bcrypt from 'bcrypt';

const signup = async(req:Request,res:Response) =>{
    const UserData = {
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,8),
    };
    try{
        const user = await User.create(UserData);
        res.status(200).send({msg:`${user.name} Your data Save`});
    }catch(err){
        res.status(500).send({
            msg:"Some Server Error"
        });
    };
    
};

const signin = (req:Request,res:Response) =>{
    const UserData = {
        email:req.body.email,
        password:req.body.password
    };

    res.status(200).send(UserData);
}


export default {
    signup,
    signin
}