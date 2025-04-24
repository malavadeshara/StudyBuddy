const express = require('express');
const router = express.Router();
const { createTask } = require('../Controllers/task.controllers');
const { authUser } = require('../Middleware/Auth');

// Route to create a task
router.post('/create-task', authUser, createTask);

module.exports = router;