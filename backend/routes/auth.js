const express = require("express");
// const { body, validationResult } = require("express-validator");    // anothor package

const router = express.Router();



// SignUp - createauser POST 
router.post('/createuser', async (req,res)=>{
    const {name,email,password} = req.body;
})