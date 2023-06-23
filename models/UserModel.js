const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: [true, 'Please enter a name'] },
  email: { type: String, required: [true, 'Please enter an email'],
  unique: true,
  trim: true,
  match: [
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'Please enter a valid email'
  ] },
  password: { type: String, required: [true, 'Please enter a password'],
  minLength: [6, 'Password must be greater than 5'],
  minLength: [25, 'Password must not be greater than 25 characters']
},
});

module.exports = mongoose.model("User", userSchema);
