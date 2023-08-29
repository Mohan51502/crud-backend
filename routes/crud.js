const express = require("express");
const cruddb = require("../models/crudSchema");
const router = express.Router();

////////////create crud
router.post("/create", async (req, res) => {

    const { fname, email, phonenumber,password,userid} = req.body;
  
    if (!fname || !email || !phonenumber || !password ||!userid ) {
        res.status(422).json({ error: "fill all the details" })
    }
  
    try {
  
      const finalleave = new cruddb({
        fname, email, phonenumber,password,userid     });
  
    // here password hasing
  
    const storeData = await finalleave.save();

  
    // console.log(storeData);
    res.status(200).json({ status: 200, storeData })
  
    } catch (error) {
        //res.status(400).json(error);
        console.log("crud catch block error",error);
    }
  
  });


  ////////get user crud only


  router.get("/getUsercrudOnly/:_id", async function (req, res, next) {
    try {
        console.log(req.params._id)
  
  
      const response = await cruddb.find({userid:req.params._id});
     // if (response.length > 0) {
        res.status(200).json({
          message: "User Fetched Successfully!!!",
          data: response,
          success: true,
        });
    //   } else {
    //     res.status(200).json({
    //       message: "No Users!!!",
    //       success: false,
    //     });
    //   }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error,
        success: false,
      });
    }
  });


  ////////////////////


  router.get("/getUser/:_id", async function (req, res, next) {
    try {
        console.log(req.params._id)
  
  
      const response = await cruddb.findOne({_id:req.params._id});
     // if (response.length > 0) {
        res.status(200).json({
          message: "Users Fetched Successfully!!!",
          data: response,
          success: true,
        });
    //   } else {
    //     res.status(200).json({
    //       message: "No Users!!!",
    //       success: false,
    //     });
    //   }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error,
        success: false,
      });
    }
  });


  /////////////update


  router.put("/leavepick/:_id", async (req, res) => {
    try {
     // console.log(req.params._id);
    //  console.log(req.query._id);
      const post = await cruddb.findByIdAndUpdate(
        {userid: req.params._id },
        { new: true }
        
      );
      if (!post) return res.status(404).send("Post not found");
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  router.put("/:_id", async (req, res) => {
    try {
      
      const post = await cruddb.findByIdAndUpdate(
        req.params._id,
        { fname: req.body.fname, email: req.body.email, phonenumber:req.body.phonenumber,
           password:req.body.password },
        { new: true }
        
      );
      console.log(req.params._id)
  
      if (!post) return res.status(404).send("Post not found");
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  // Deleting a post by id
router.delete("/:_id", async (req, res) => {
    try {
      const post = await cruddb.findByIdAndRemove(req.params._id);
      if (!post) return res.status(404).send("Post not found");
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  module.exports = router;



  