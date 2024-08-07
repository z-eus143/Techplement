// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { json } = require('body-parser');
require('dotenv').config();

// Import routes
const userRoutes = require('../routes/UserRoute');
const quoteRoutes = require('../routes/QuoteRoute');
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;

// Initialize app
const app = express();

// Middleware
app.use(json({ limit: '50mb' }));
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Route handling
app.use('/Signup', userRoutes);
app.use('/Quote', quoteRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to MongoDB and start the server
mongoose.connect(DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = app;
