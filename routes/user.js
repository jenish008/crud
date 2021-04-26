const express = require("express");
const router = express.Router();
const getuser = require("../controller/usercontroller");


router
.get('/',(req,res)=>{getuser.getuser()})  
.post('/',(req,res)=>{getuser.postuser()}) 
.delete('/:id',(req,res)=>{getuser.deleteUser()}) 
.put('/',(req,res)=> {getuser.updateUser()})

 
module.exports = router;
 