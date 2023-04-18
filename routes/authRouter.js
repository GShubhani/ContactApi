// import express  from "express";
const express=require("express")
const router= express.Router()


const {getContacts,postContact,getContact,putContact,deleteContact} = require("../controlers/authcontoler")
const tokenhandler = require("../middlewere/tokenauthenticationhandler")

// router.use(tokenhandler)

router.route("/").get(tokenhandler,getContacts).post(tokenhandler,postContact)
router.route("/:id").get(getContact).put(putContact).delete(deleteContact)

// router.route("/").get(getContacts)
// router.route("/").post(postContact)
// router.route("/:id").get(getContact)
// router.route("/:id").put(putContact)
// router.route("/:id").delete(deleteContact)

// export default router;
module.exports = router