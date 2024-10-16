// models/chartData.js
const mongoose = require('mongoose');

const chartDataSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
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
