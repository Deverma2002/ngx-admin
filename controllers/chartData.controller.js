const ChartData = require('../models/chartData');

// Get chart data for a specific user (admin can fetch for any user, normal users can only fetch their own)
const getChartData = async (req, res) => {
  try {
    const { role, id: requestorId } = req.user; // Extract the logged-in user's role and ID
    const userId = req.params.userId;

    // Normal users can only access their own data
    if (role === 'user' && requestorId !== userId) {
      return res.status(403).json({ message: 'Access denied: You can only access your own chart data' });
    }

    const chartData = await ChartData.findOne({ userId });
    if (!chartData) {
      return res.status(404).json({ message: 'Chart data not found' });
    }

    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getChartData,
};
