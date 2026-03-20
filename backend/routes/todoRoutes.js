const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Address: GET http://localhost:3000/api/todos
// Action: Fetches all campus tasks
router.get('/', todoController.getTodos);

// Address: POST http://localhost:3000/api/todos
// Action: Saves a new campus task
router.post('/', todoController.createTodo);

module.exports = router;