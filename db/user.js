const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String,
    password: String
});

module.exports = mongoose.model("users", userSchema);