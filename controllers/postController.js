// const mongoose = require("mongoose");
const Post = require('../models/Post');
// const { ObjectId } = mongoose.Types;

// Display list of all Posts
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
        .populate('location')
    // .sort(['date', 'ascending'])
    res.json({
      success: true,
      msg: 'show all posts',
      data: posts,
    })  
  } catch(err) {
    next(err)
  }
};

// Display one selected Post
const getPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
            .populate('location')
        res.json({
            success: true,
            msg: 'show selected post',
            data: post
        })
    } catch(err) {
        next(err)
    }
};

// Handle Location create on POST
const createPost = async (req, res, next) => {
    try {
        const { region, country, city, title, story, picture, user, status } = req.body;
        const post = await Post.create({ region, country, city, title, story, picture, user, status });
        res.json({ success: true, msg: 'show new post', data: post})
    } catch(err) {
        next(err)
    }
};

// Handle Post update on PUT
const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { region, country, city, title, story, picture, user, status } = req.body;
        const post = await post.findByIdAndUpdate(id, { region, country, city, title, story, picture, user, status }, { new: true});
        res.json({
            success: true,
            msg: `post with ${id} updated`,
            data: post
        })
    } catch(err) {
        next(err)
    }
};

// Handle Location delete on DELETE
const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        res.json({
            success: true,
            msg: `post with id ${id} deleted`,
            data: post
        })
    } catch(err) {
        next(err)
    }
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
 }