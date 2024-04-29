const express = require('express');
const router = express.Router();
const likeController = require('../Controller/LikeController');

// Route to add a like
router.post('/', likeController.addLike);

// Route to remove a like
router.delete('/:postId/:userId', likeController.removeLike);

module.exports = router;
