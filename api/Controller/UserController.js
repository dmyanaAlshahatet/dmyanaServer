const { default: mongoose } = require("mongoose");
const mongodb = require("mongodb");
const userModule = require("../modules.js/user.module");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const songModule = require("../modules.js/song.module");
const nodemailer = require("nodemailer");
module.exports = {

    Login: async (req, res) => {
        try {
            // Get user input
            const { email, password } = req.query;

            // Validate user input
            if (!(email && password)) {
                res.status(407).send("All input is required");
            }
            // Validate if user exist in our database
            const user = await userModule.findOne({ email });

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const JWT_SECRET =
                    "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
                const token = jwt.sign({ user_id: user._id, email }, JWT_SECRET);

                // save user token
                user.token = token;

                // user
                res.status(200).json({ user: user });
            }
            res.status(403).json({ message: "Invalid Credentials" });
        } catch (err) {
            console.log(err);
        }
    },
    Register: async (req, res) => {
        try {
            // Get user input
            const { email, password } = req.body;

            // Validate user input
            if (!(email && password)) {
                res.status(408).json({ message: "All input is required" });
            }
            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await userModule.findOne({ email });

            if (oldUser) {
                return res
                    .status(207) //207 is an error
                    .json({ message: "User Already Exist. Please Login" });
            }
            //Encrypt user password
            encryptedPassword = await bcrypt.hash(password, 10);

            // Create user in our database
            const user = await userModule.create({
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                password: encryptedPassword,
            });

            const JWT_SECRET =
                "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
            // Create token
            const token = jwt.sign({ user_id: user._id, email }, JWT_SECRET);

            // save user token
            user.token = token;
            // return new user
            res.status(200).json({ user: user });
        } catch (err) {
            console.log(err);
        }
    },
};