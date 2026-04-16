const express = require('express');
const router = express.Router();
// Ensure this points to your specific controller file
const { getEvents } = require('../controllers/todoController'); 

router.get('/', getEvents);

module.exports = router;