const mongoose = require('mongoose');

const userSchema = mongoose.Schema
const User = new userSchema({
    name: String,
    email: String,
    total_leaves: Number,
    paid_leaves: Number,
    sick_leaves: Number,
    casual_leaves: Number
})

const myModel = mongoose.model("User", User);

module.exports = myModel;
