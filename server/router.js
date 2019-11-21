const db = require("../database/index");
const router = require("express").Router();
const {user,drug} = require("../database/models");

const lazyFun1 = (err,data,res,code)=>{
  if(err) res.status(400).send(err);
  else if(!data) res.status(404).send("item not found");
  else res.status(code).send(data);
};
const lazyFun2 = (err,res,code)=>{
  if(err) res.status(400).send(err);
  else res.status(code).send();
};

//CAUTION: this db won't avoid identical name for you

router.get('/users/all',(req,res)=>{
  //find all users in the list
  user.find({},(err,data)=>{lazyFun1(err,data,res,200)});
});

router.get('/user/:name',(req,res)=>{
  //CAUTION: this query will only return one user
  user.findOne({name:req.params.name},(err,data)=>{lazyFun1(err,data,res,200)});
});
router.post('/user',(req,res)=>{
  //CAUTION: this query will only insert one user
  user.insertMany([req.body],(err)=>{lazyFun2(err,res,201)});
});
router.delete('/user/:name',(req,res)=>{
  //delete all users with given name and the drug belongs to that name
  user.deleteMany({name:req.params.name},(err)=>{lazyFun2(err,res,203)});
  drug.deleteMany({username:req.params.name},(err)=>{lazyFun2(err,res,203)});
});

// router.put('/user',(req,res)=>{});

router.get('/drugs/:username',(req,res)=>{
  drug.find({username:req.params.username},(err,data)=>{lazyFun1(err,data,res,200)});
});
// router.put('/drugs',(req,res)=>{});
router.delete('/drugs/:username',(req,res)=>{
  drug.deleteMany({username:req.params.username},(err)=>{lazyFun2(err,res,203)});
});

router.get('/drug/:_id',(req,res)=>{
  drug.find({_id:req.params._id},(err,data)=>{console.log(data); lazyFun1(err,data,res,200)});
});
router.post('/drug',(req,res)=>{
  drug.insertMany([req.body],(err)=>{lazyFun2(err,res,201)});
});
router.put('/drug/:name',(req,res)=>{
  //can only update one. using unexisting name might cause error
  drug.replaceOne({name:req.params.name},req.body,(err)=>{lazyFun2(err,res,202)});
});
router.delete('/drug/:name',(req,res)=>{
  drug.deleteMany({name:req.params.name},(err)=>{lazyFun2(err,res,203)});
});

module.exports = router;