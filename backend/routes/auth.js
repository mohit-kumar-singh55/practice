const express = require('express');
// const { body, validationResult } = require("express-validator");    // anothor package
const User = require("../models/User")

const router = express.Router();



// SignUp - createauser POST 
router.post('/createuser', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // check if user already exists
        let user = await User.findOne({ email: email });
        if (user) res.status(400).json({ error: "Sorry, User with this email already exists!" });

        // create user
        user = User.create({ name, email, password });
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({ error });
    }
})


module.exports = router;