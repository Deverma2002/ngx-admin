const mongoose = require('mongoose');
const reportAggregationSchema = new mongoose.Schema({
    report_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' },
    column_name: String,
    aggregation_type: String,  // SUM, COUNT, AVG, etc.
    display_name: String,
  });
  
  const ReportAggregation = mongoose.model('ReportAggregation', reportAggregationSchema);
  