const express = require('express')

const { createQuote , showQuote , QuoteOD} = require('../controller/QuoteController');

const router = express.Router();

// POST endpoint to create a new user
router.post('/add', createQuote);
router.get('/show', showQuote);
router.get('/', QuoteOD);

module.exports = router;