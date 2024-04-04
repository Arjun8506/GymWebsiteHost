const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://arjunnagar801098:gymsite@gymwebsite.jxgdqmy.mongodb.net/GymDataBase");
console.log("connected to db");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
});

userSchema.plugin(plm);

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;