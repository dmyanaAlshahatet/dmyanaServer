const mongoose = require("mongoose");
const { use } = require("../App.JS");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: { type: String, uniqe: true },
    password: Number,
    images: { type: [String], default: [] },
    vector: String,
    userName: String,
    bio: String
});

const userModole =

    mongoose.model("user", userSchema); //making this module to an actual collection in mongoDB.
// LoginSchema means which schema will follow.

module.exports = userModole; // what things we're going to export from this file.