const express = require('express');
const { generateReport, getReportsForRole } = require('../controllers/report.controller');

const router = express.Router();

router.post('/generate', generateReport);
router.get('/role/:roleName', getReportsForRole);

// Define more routes as necessary

module.exports = router;
