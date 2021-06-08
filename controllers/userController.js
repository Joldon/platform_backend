// const mongoose = require("mongoose");
const User = require('../models/User');
// const { ObjectId } = mongoose.Types;

// Display list of all Users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    // .sort(['nickname', 'ascending'])
    res.json({
      success: true,
      msg: 'Show all users',
      data: users
    })  
  } catch(err) {
    next(err)
  }
};

// Display one selected User
const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({
      success: true,
      msg: 'Show selected user',
      data: user
    })
  } catch(err) {
    next(err)
  }
};

// Handle User create on POST
const createUser = async (req, res, next) => {
  try {
      const { email, nickname } = req.body;
      const user = await User.create({ email, nickname })
      res.json({
        success: true,
        msg: 'New user created',
        data: user
      })
    } catch(err) {
      next(err)
    }
};

// Handle User update on PUT
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email, nickname } = req.body;
    const user = await User.findByIdAndUpdate(id, { email, nickname }, { new: true })
    res.json({
      success: true,
      msg: `Selected user with id(${id}) updated`,
      data: user
    })
  } catch(err) {
    next(err)
  }
};

// Handle User delete on DELETE
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `Selected user with id(${id}) deleted`,
      data: user
    });
  } catch(err) {
    next(err)
  }
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}