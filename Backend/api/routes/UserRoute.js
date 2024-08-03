const express = require('express');
const { createUser , signin } = require('../controller/UserController');

const router = express.Router();

// POST endpoint to create a new user
router.post('/', createUser);
router.post('/signin', signin);

module.exports = router;
