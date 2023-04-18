const asyncHandler = require('express-async-handler')
const jwtwebtoken = require("jsonwebtoken")

const tokenhandler = asyncHandler(async(request,response,next)=>{
    let authtoken = ''
    const headertoken = request.headers.Authorization || request.headers.authorization
    console.log("headertoken",headertoken);
    if(headertoken && headertoken.startsWith("Bearer")){
        authtoken = headertoken.split(" ")[1]
       let  tokenverification = jwtwebtoken.verify(authtoken,process.env.SECRECTKEY,(err,decord)=>{
        if(err){
            console.log("err",err);
        }
        else{
            console.log("decode.user",decord.user);
            request.user= decord.user
            next()
        }
        })
    }
})

module.exports = tokenhandler

