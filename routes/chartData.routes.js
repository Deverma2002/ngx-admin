// routes/leadChartData.js
const express = require('express');
const Lead = require('../models/lead');  // Import Lead model
const ChartData = require('../models/chartData');  // Import ChartData model
const mongoose = require('mongoose');  // Import mongoose

const router = express.Router();

// Get both Lead and Chart Data for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId; // Get userId from request parameters

    // Log the incoming userId
    console.log('Incoming userId:', userId);

    // Use Mongoose's default _id field to find the lead
    const lead = await Lead.findById(userId);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    console.log('Fetching chart data for userId:', userId);

    // Convert string userId to ObjectId for querying ChartData
    const chartData = await ChartData.findOne({ userId: req.params.userId });    if (!chartData) {
      return res.status(404).json({ message: 'Chart data not found for this user' });
    }

    // Return both lead and chart data
    res.json({
      lead,
      chartData,
    });
  } catch (error) {
    console.error('Error fetching data:', error); // Log the error details
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
router.post('/create-lead-chartdata', async (req, res) => {
  try {
    // Create a new lead
    const newLead = new Lead(req.body.lead);
    await newLead.save();

    // Create corresponding chart data
    const chartData = new ChartData({
      userId: newLead.ID,  // Use the Lead's ID
      lineData: req.body.chartData.lineData,
      pieData: req.body.chartData.pieData,
      radarData: req.body.chartData.radarData,
      barData: req.body.chartData.barData,
    });
    await chartData.save();

    res.status(201).json({ lead: newLead, chartData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
