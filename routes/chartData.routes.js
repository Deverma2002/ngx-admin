const express = require('express');
const { getChartData } = require('../controllers/chartData.controller');
const authenticateUser = require('../middleware/authenticateUser');
const router = express.Router();

// Get chart data for a specific user, admins can fetch for any user
router.get('/:userId', authenticateUser, getChartData);

module.exports = router;
