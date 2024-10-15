const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  ID: Number,
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  age: Number,
  // Add any other lead-related fields
}, {
  timestamps: true,
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
