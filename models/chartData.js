// models/chartData.js
const mongoose = require('mongoose');

// Modify userId to reference the Lead's ID field
const chartDataSchema = new mongoose.Schema({
  userId: { type: String, ref: 'Lead', required: true}, // Reference Lead ID
  lineData: {
    labels: { type: [String], required: true },
    values: { type: [Number], required: true },
  },
  pieData: {
    labels: { type: [String], required: true },
    values: { type: [Number], required: true },
    colors: { type: [String], required: true },
    borderColors: { type: [String], required: true },
  },
  radarData: {
    labels: { type: [String], required: true },
    values: { type: [Number], required: true },
  },
  barData: {
    labels: { type: [String], required: true },
    values: { type: [Number], required: true },
  },
});

const ChartData = mongoose.model('ChartData', chartDataSchema);

module.exports = ChartData;
