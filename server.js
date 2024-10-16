//express
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const leadRoutes = require('./routes/lead.routes');
const chartData = require('./routes/chartData.routes');
const cors = require('cors'); 
const ChartData = require('./models/chartData');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to the database
connectDB();

// Define routes
app.use('/api/leads', leadRoutes);
app.use('/api/chartdata', chartData);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
