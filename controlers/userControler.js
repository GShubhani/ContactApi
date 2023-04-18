

const asyncHandler = require('express-async-handler')
const bcrypt = require("bcrypt")
const UserRagistration= require("../models/userloginSchma")
const jwtwebtoken = require("jsonwebtoken")



// regidter user
const registerContact=async(request,response)=>{
    console.log("request.body",request.body);
    const {full_name,email,password} = request.body
    
    if(!full_name || !email || !password ){
        res.status(400)
        throw new Error("some field is missing")
    }
    console.log("okjnhygc");
    const getuser = await UserRagistration.findOne({email})
    console.log("okjnhygc");
    // if(getuser){
    //     throw new Error("this id is taken ")
    // }
    const hashed_password = await bcrypt.hash(password,10)
    console.log("hashed password ",hashed_password);
    const getuserById = await UserRagistration.create({
        full_name,
        email,
        password:hashed_password
    })

    if (!getuserById){
        response.status(404)
        throw new Error("id not found")
    }
    response.status(200).json({"msg":getuserById})
    
    
}
// login user
const loginContact=asyncHandler(async(request,response)=>{
    const {email,password} = request.body
    if(!email || !password ){
        res.status(400)
        throw new Error("some field is missing")
    }
    console.log("dfghjdfhg",email,password);

    const getuserById = await UserRagistration.findOne({email})
    console.log("getuserById",getuserById);
    if(getuserById && (await bcrypt.compare(password,getuserById.password))){
        const jwttoken= jwtwebtoken.sign({
            user:{
                email:getuserById.email,
                "full_name":getuserById.full_name,
                id:getuserById._id
            }
        },
        process.env.SECRECTKEY,
        { expiresIn: '15m' }
        // { expiresIn: '1h' }
        )

        response.status(200).json({"msg":jwttoken})
    }
    else{
        response.status(404)
        throw new Error("id not found")
    }
    
    
})
// current user
const currentContact=asyncHandler(async(request,response)=>{
    // const getuserById = await UserSchema.findById(request.params.id)
    // if (!getuserById){
    //     response.status(404)
    //     throw new Error("id not found")

    // }
    console.log("et",request.user);
    response.status(200).json({"msg":[]})
    
    
})


module.exports = {registerContact,loginContact,currentContact}