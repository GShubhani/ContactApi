const mongoose = require("mongoose")

const userloginSchema= mongoose.Schema({
    "full_name":{
        type:String,
        required:[true , "Pls add name"],
        min:3
    },
    "email":{
        type:String,
        required:[true, "Pls add Email"],
        min:[3, " more than 3 "],
        unique:[ true, "email is taken "]
    },
    "password":{
        type:String,
        required:[true , "Pls add password"],
        min:3
    },
   
},{
    timestamps:true
})

module.exports = mongoose.model("UserRagistration",userloginSchema)