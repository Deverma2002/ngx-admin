// routes/lead.routes.js
const express = require('express');
const { getLeads, getLeadById } = require('../controllers/lead.controller');
const authenticateUser = require('../middleware/authenticateUser');
const router = express.Router();

// Admin route to get all leads
router.get('/', authenticateUser, (req, res) => {
  if (req.user.role === 'admin') {
    return getLeads(req, res);
  } else {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
});

// Normal users to get their own lead info
router.get('/me', authenticateUser, getLeadById);

module.exports = router;
