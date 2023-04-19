const express=require("express")
const router= express.Router()


const {registerContact,loginContact,currentContact} = require("../controlers/userControler")
const tokenhandler = require("../middlewere/tokenauthenticationhandler")

router.route("/register").post(registerContact)
// router.route("/register").post((req,res)=>{
//     console.log("0pitryirtrytiy;0");
//     res.json({"msg":[]})
// })
// router.post((req,res)=>{
//     console.log("0p0p0;0");
// })
router.route("/login").post(loginContact)

router.route("/current").get(tokenhandler,currentContact)
router.route("/apit6yg").get((request,response)=>{
    response.send("hello dear")
})

// router.route("/").get(getContacts)
// router.route("/").post(postContact)
// router.route("/:id").get(getContact)
// router.route("/:id").put(putContact)
// router.route("/:id").delete(deleteContact)

// export default router;
module.exports = router