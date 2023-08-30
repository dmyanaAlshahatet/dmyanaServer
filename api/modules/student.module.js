const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    id: Number,
});

const StudentModule =

    mongoose.model("StudentModule", StudentSchema); //making this module to an actual collection in mongoDB.

module.exports = StudentModule; // what things we're going to export from this file.