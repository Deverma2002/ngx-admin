const mongoose = require('mongoose');
// controllers/lead.controller.js
const Lead = require('../models/lead');

// Get all leads (for admin only)
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find(); // Fetch all leads
    // Convert userId to string before sending the response
    const formattedLeads = leads.map(lead => ({
      ...lead._doc,
      _id: lead._id.toString(), // Convert ObjectId to string
      userId: lead.userId.toString(), // Ensure userId is in string form
    }));
    res.status(200).json(formattedLeads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get lead by ID (for normal user to fetch their own data)
const getLeadById = async (req, res) => {
  try {
    const userId = req.user._id.toString(); // Extract the logged-in user's ID and convert to string
    
    const lead = await Lead.findOne({ userId }); // Fetch the lead based on the logged-in user
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    // Convert ObjectId to string before sending the response
    res.status(200).json({
      ...lead._doc,
      _id: lead._id.toString(), // Convert ObjectId to string
      userId: lead.userId.toString(), // Ensure userId is in string form
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLeads,
  getLeadById,
};
