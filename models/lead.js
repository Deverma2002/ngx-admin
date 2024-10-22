// models/lead.js
const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  age: Number,
  userId: { type: String, ref: 'User', required: true }, // Reference to User as String
}, {
  timestamps: true,
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
