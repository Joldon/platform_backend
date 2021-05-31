const express = require("express");
const api = express.Router();

const postController = require('../controllers/postController')

api
  .route("/create")
  .post(postController.createPost)

api
  .route('/:id/update')
  .put(postController.updatePost)

api
  .route('/:id/delete')
  .delete(postController.deletePost)

api
  .route('/:id')
  .get(postController.getPost)

api
  .route("/")
  .get(postController.getPosts)

module.exports = api;