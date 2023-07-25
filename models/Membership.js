const mongoose = require("mongoose");

const MembershipSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Street_Address: {
    type: String,
    required:true
  },
  State: {
    type: Number,
    required:true
  }
  Zipcode: {
    type: Number,
    required:true
  }
  State: {
    type: Number,
    required:true
  }
},{timestamps:true});

module.exports = mongoose.model("membership", MembershipSchema);