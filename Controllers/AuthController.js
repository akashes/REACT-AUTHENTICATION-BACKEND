const User = require("../Models/UserModel");
const bcrypt = require('bcryptjs')
const errorMiddleware = require('../Middlewares/errorMiddleware')
exports.userRegister=async(req,res,next)=>{
    try{
        
    const {username,email,password}=req.body
    // const existingUser = User.findOne({email})
    // if(existingUser){
    //     res.status(401).json("User already existing")

    // }
    const hashedPassword = bcrypt.hashSync(password,10)
    const newUser = await new User({username,email,password:hashedPassword})
    await newUser.save()
    res.status(200).json(newUser)

    }catch(err){
        next(errorMiddleware.errorHandler(500,'something went wrong'))
        
    }
}

exports.userLogin=async(req,res)=>{

}