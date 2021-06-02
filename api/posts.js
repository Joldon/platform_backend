const express = require("express");
const api = express.Router();

const postController = require('../controllers/postController')

api
  .route('/')
  .post(postController.createPost)
  .get(postController.getPosts)
  

api
  .route('/:id')
  .put(postController.updatePost)
  .delete(postController.deletePost)
  .get(postController.getPost)

module.exports = api;