const User = require("../models/user.model");
const jwt =  require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// register
exports.register = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password : hashPassword
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({message : error.message});
    }
};

//login
exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message : "Email not found"});
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({message : "Wrong password"});
        }

        const token = jwt.sign(
            {id : user._id},
            process.env.JWT_SECRETE
        );

        res.json({token});
    }

    catch (error) {
        res.status(400).json({message : error.message});
    }
};
