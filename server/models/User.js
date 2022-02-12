const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  role: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  phone:{
    type:String,
     required:true
  }
});
module.exports = mongoose.model("User", userSchema);
