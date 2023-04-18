
const UserSchema= require("../models/userSchema")


// get all user
// private
const getContacts= async(request,response)=>{
    console.log("poiuytrewq");
    const getuser = await UserSchema.find({user_id:request.user.id})
    if (!getuser){
        response.status(404)
        throw new Error("id not found")
    }
    response.status(200).json(getuser)
    
}

// post user
const postContact=async(request,res)=>{
    console.log("090909");
    const {full_name,email,password,conform_password,number} = request.body
    if(!full_name || !email || !password || !conform_password  || !number){
        res.status(400)
        throw new Error("some field is missing")
    }
    console.log("request.user.id,",request.user);
    const createnewuser = await UserSchema.create({
        user_id:request.user.id,
        full_name,
        email,
        password,
        conform_password,
        number
    })
    
    res.status(201).json({"msg":{createnewuser}})
}
// get id  user
const getContact=async(request,response)=>{
    const getuserById = await UserSchema.findById(request.params.id)
    if (!getuserById){
        response.status(404)
        throw new Error("id not found")
    }
    response.status(200).json({"msg":getuserById})
    
    
}
// put id  user
const putContact=async(request,response)=>{

    const getuserById = await UserSchema.findById(request.params.id)
    if (!getuserById){
        response.status(404)
        throw new Error("id not found")
    }
    else if(getuserById && getuserById.user_id.toString() !== request.user.id){
        response.status(403)
        throw new Error("you can't do this ")
    }
    else{
        const getuserById = await UserSchema.findByIdAndUpdate(request.params.id,request.body,{new:true})
        response.status(200).json({"msg":getuserById})
    }
}
// delete id user
const deleteContact=async(request,response)=>{
    const getuserById = await UserSchema.findById(request.params.id)
    if (!getuserById){
        response.status(404)
        throw new Error("id not found")
    }
    else if(getuserById && getuserById.user_id.toString() !== request.user.id){
        response.status(403)
        throw new Error("you can't do this ")
    }
    else{
        const getuserById = await UserSchema.findByIdAndDelete(request.params.id)
        response.status(200).json({"msg":getuserById})
    }
}

module.exports = {getContacts,postContact,getContact,putContact,deleteContact}
// module.exports = {getContacts,postContact,getContact,putContact,deleteContact}