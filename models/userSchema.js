const mongoose = require("mongoose")

const userSchema= mongoose.Schema({
    "user_id":{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"UserRagistration"

    },
    "full_name":{
        type:String,
        required:[true , "Pls add name"],
        min:3
    },
    "email":{
        type:String,
        required:[true, "Pls add Email"],
        min:3
    },
    "password":{
        type:String,
        required:[true , "Pls add password"],
        min:3
    },
    "conform_password":{
        type:String,
        required:[true , "Pls add conform password"],
        min:3
    },
    "number":{
        type:Number,
        required:[true , "Pls add number"],
        min:10
    },

},{
    timestamps:true
})

module.exports = mongoose.model("Contact",userSchema)