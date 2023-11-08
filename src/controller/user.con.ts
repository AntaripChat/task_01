import { Response,Request } from "express"
const user = (req:Request,res:Response) =>{
    res.send({
        msg:"Hello"
    });
};


export default user;