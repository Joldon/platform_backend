const express = require("express");
const api = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost
} = require('../controllers/posts');

api
  .route("/")
  .get(getPosts)
  .post(createPost)

api
    .route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost)

  module.exports = api;