const mongoose = require("mongoose");

const PublicationsSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required:true
  },
  YearPublished: {
    type: Number,
    required:true
  }
},{timestamps:true});

module.exports = mongoose.model("publications", PublicationsSchema);