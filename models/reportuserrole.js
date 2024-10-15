const mongoose = require('mongoose');
const reportUserRoleSchema = new mongoose.Schema({
    report_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' },
    role_name: String,  // e.g., seller, marketplace
  });
  
  const ReportUserRole = mongoose.model('ReportUserRole', reportUserRoleSchema);
  