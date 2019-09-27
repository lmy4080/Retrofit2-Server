const express = require('express');
const app = express();

// Register Route
const LotteryRoutes = require('./api/routes/lottery');

// Set Middleware
app.use('/lottery', LotteryRoutes);

// Export This Module
module.exports = app;