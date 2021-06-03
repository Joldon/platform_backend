const mongoose = require("mongoose");
const Post = require('../models/Post');
// const { ObjectId } = mongoose.Types;

// Display list of all Posts for admin
const getAllPosts = async (req, res, next) => {
    try {
      const posts = await Post.find() //apply filters inside find() 
          .populate('location')
      // .sort(['date', 'ascending'])
      res.json({
        success: true,
        msg: 'Show all posts',
        data: posts,
      })  
    } catch(err) {
      next(err)
    }
  };

// Display list of all status:true Posts
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ status: true }) //apply filters inside find() 
        .populate('location')
    // .sort(['date', 'ascending'])
    res.json({
      success: true,
      msg: 'Show all true posts',
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
            msg: 'Show selected post',
            data: post
        })
    } catch(err) {
        next(err)
    }
};

// Handle Location create on POST
const createPost = async (req, res, next) => {
    try {
        const { region, country, locationName, title, story, image, email, nickname } = req.body;
        const post = await Post.create({ region, country, locationName, title, story, image, email, nickname })
        res.json({ success: true, msg: 'Show new post', data: post})
    } catch(err) {
        next(err)
    }
};

// Handle Post update on PUT
const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { region, country, locationName, title, story, image, email, nickname } = req.body;
        const post = await post.findByIdAndUpdate(id, { region, country, locationName, title, story, image, email, nickname }, { new: true})
        res.json({
            success: true,
            msg: `Selected post with id(${id}) updated`,
            data: post
        })
    } catch(err) {
        next(err)
    }
};

// Handle Post update on PUT to change status
const updateStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const post = await post.findByIdAndUpdate(id, { status }, { new: true })
        res.json({
            success: true,
            msg: `Selected post with id(${id}) status updated `,
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
        const post = await Post.findByIdAndDelete(id)
        res.json({
            success: true,
            msg: `Selected post with id(${id}) deleted`,
            data: post
        })
    } catch(err) {
        next(err)
    }
};

module.exports = {
    getPosts,
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    updateStatus,
    deletePost
 }