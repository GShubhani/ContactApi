const mongoose = require("mongoose")

const dbconnect = async()=>{
    try{
        // const server= process.env.CONNECT_DATABASE || "mongodb://localhost:27017/Shubhani-dataBase12"
        const server=  process.env.CONNECT_DATABASE 
        // const connect = await mongoose.connect(process.env.CONNECT_DATABASE)
        const connect = await mongoose.connect(server)
        console.log("connect234",server);
        console.log(connect.connection.host);
        console.log(connect.connection.name);

    }catch(e){
        console.log("uuu",e);
        process.exit(1)

    }
}

module.exports =dbconnect