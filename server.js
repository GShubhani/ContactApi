const express = require("express")
const app = express()
const connectiondb = require("./config/dbConnection")
const dotenv = require("dotenv").config();




const port=process.env.PORT || 5000

connectiondb()


app.use(express.json())
app.use("/api/contacts",require("./routes/authRouter"))
app.use("",require("./routes/userRouter"))
// app.post("/register",(req,res)=>{
//     console.log("sfsdgdfg");
// })


app.listen(port,()=>{
    console.log(`this is port number ${port}`);
})
















// DELETE FROM readingmaster
// WHERE (rdng_ocr_status = 'Failed' AND cons_ac_no IN (
// SELECT cons_ac_no
// FROM readingmaster
// WHERE rdng_ocr_status = 'Failed'
// AND extract(month from reading_date_db) = 4
// GROUP BY cons_ac_no
// HAVING COUNT(*) > 1
// )) OR (rdng_ocr_status = 'Passed' AND cons_ac_no IN (
// SELECT cons_ac_no
// FROM readingmaster
// WHERE rdng_ocr_status = 'Passed'
// AND extract(month from reading_date_db) = 4
// AND cons_ac_no NOT IN (
// SELECT cons_ac_no
// FROM readingmaster
// WHERE rdng_ocr_status = 'Failed'
// AND extract(month from reading_date_db) = 4
// GROUP BY cons_ac_no
// HAVING COUNT(*) > 1
// )
// ));