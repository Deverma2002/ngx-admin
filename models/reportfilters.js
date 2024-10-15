const mongoose = require('mongoose');
const reportFilterSchema = new mongoose.Schema({
    report_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' },
    filter_name: String,
    filter_type: String,
    default_value: String,
    operator: String,
    filter_options: mongoose.Schema.Types.Mixed,
  });
  
  const ReportFilter = mongoose.model('ReportFilter', reportFilterSchema);
  