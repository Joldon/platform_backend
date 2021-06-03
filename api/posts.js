const express = require("express");
const api = express.Router();

const {getPosts, getAllPosts, getPost, createPost, updatePost, updateStatus, deletePost } = require('../controllers/postController')

api
  .route('/')
  .get(getPosts)
  .post(createPost)

api
  .route('/list')
  .get(getAllPosts)
  .put(updateStatus)

api
  .route('/:id')
  .get(getPost)
  .put(updatePost)
  .delete(deletePost)

module.exports = api;