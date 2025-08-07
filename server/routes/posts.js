const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const verifyToken = require('../middleware/verifyToken');

// POST /api/posts - Create new post (auth required)
router.post('/', verifyToken, postController.createPost);
// GET /api/posts - Fetch all posts (public)
router.get('/', postController.getAllPosts);
// GET /api/posts/:id - Get single post (public)
router.get('/:id', postController.getPostById);
// PUT /api/posts/:id - Update post (auth required)
router.put('/:id', verifyToken, postController.updatePost);
// DELETE /api/posts/:id - Delete post (auth required)
router.delete('/:id', verifyToken, postController.deletePost);

module.exports = router;
