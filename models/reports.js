const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
    name: String,
    description: String,
    group_name: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });
  
  const Report = mongoose.model('Report', reportSchema);
  