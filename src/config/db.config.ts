import mongoose from "mongoose";

const dbConnect = ()=>{
     mongoose.connect("mongodb://127.0.0.1:27017/data")
    .then(()=>console.log("DB connect"))
    .catch((err)=>console.log(err));
}

export default dbConnect;