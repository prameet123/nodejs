var express = require("express");
var router = express.Router();
var apiModel = require('../models/api');

router.post("/register", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  apiModel.insertMany()
  .then(function(data){
    if (data) {
      res.send({status:true,data:data});
    } else {
      res.send({status:false,data:[]});
    }
  })
  .catch(function(){
    res.send({status:false,data:[]});
  });
});

/* GET users listing. */
router.get("/login", function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  apiModel.selectMany()
  .then(function(data){
    if (data.length) {
      res.send({status:true,message:'Data found',data:data});
    } else {
      res.send({status:false,data:[]});
    }
  })
  .catch(function(){
    res.send({status:false,data:[]});
  });
});

module.exports = router;
