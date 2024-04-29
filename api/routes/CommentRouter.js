const express = require('express');
const router = express.Router();
const commentController = require('../Controller/commentsController');

// Route to create a new comment
router.post('/', commentController.createComment);

// Route to delete a comment by ID
router.delete('/:id', commentController.deleteComment);

module.exports = router;
