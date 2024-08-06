// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { json } = require('body-parser');

// Import routes
const userRoutes = require('../routes/UserRoute');
const quoteRoutes = require('../routes/QuoteRoute');

// Initialize app
const app = express();
const port = 3001;
const mongoURI = "mongodb+srv://Tanmay:Tanmay@atlascluster.yxup98a.mongodb.net/";

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
mongoose.connect(mongoURI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = app;
