const express = require('express');
const { createLead, getLeads }  = require('../controllers/lead.controller');

const router = express.Router();

// router.post('/', createLead);

// Define more routes for getting, updating, and deleting leads

router.get('/' , getLeads);

module.exports = router;
