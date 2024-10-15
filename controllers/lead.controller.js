const Lead = require('../models/lead'); // Import Lead model

// Create Lead
// const createLead = async (req, res) => {
//   try {
//     const lead = new Lead(req.body);
//     await lead.save();
//     res.status(201).json(lead);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// Get all Leads
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find(); // Fetch all leads
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
//   createLead,
  getLeads,
};
