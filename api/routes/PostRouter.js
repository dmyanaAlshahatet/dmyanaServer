const express = require('express');
const router = express.Router();
const postController = require('../Controller/PostsController');

// Route to create a new post
router.post('/', postController.createPost);

// Route to get all posts
router.get('/', postController.getAllPosts);

// Route to get a post by ID
router.get('/:id', postController.getPostById);

// Route to update a post by ID
router.put('/:id', postController.updatePostById);

// Route to delete a post by ID
router.delete('/:id', postController.deletePostById);

module.exports = router;
