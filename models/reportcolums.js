const mongoose = require('mongoose');
const reportColumnSchema = new mongoose.Schema({
    report_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' },
    column_name: String,
    display_name: String,
    is_visible: { type: Boolean, default: true },
    data_type: String,
  });
  
  const ReportColumn = mongoose.model('ReportColumn', reportColumnSchema);
  