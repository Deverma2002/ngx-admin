// routes/chartData.js
const express = require('express');
const ChartData = require('../models/chartData');

const router = express.Router();

// Get chart data for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const data = await ChartData.findOne({ userId: req.params.userId });
    if (!data) {
      return res.status(404).send('Data not found');
    }
    res.json(data);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Create or update chart data for a specific user
router.post('/', async (req, res) => {
  const { userId, lineData, pieData, radarData, barData } = req.body;

  try {
    let data = await ChartData.findOneAndUpdate(
      { userId },
      { lineData, pieData, radarData, barData },
      { upsert: true, new: true }
    );
    res.json(data);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
