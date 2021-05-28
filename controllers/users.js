const User = require('../models/User');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      msg: 'show some users',
      data: users
    })  
  } catch(err) {
    next(err)
  }

}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({
      success: true,
      msg: 'show selected user',
      data: user
    })
  } catch(err) {
    next(err)
  }

}

const createUser = async (req, res, next) => {
  try {
      const { email, nickname } = req.body;
      const user = await User.create({ email, nickname })
      res.json({
        success: true,
        msg: 'new user created',
        data: user
      })
    } catch(err) {
      next(err)
    }
  
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email, nickname } = req.body;
    const user = await User.findByIdAndUpdate(id, { email, nickname }, { new: true })
    res.json({
      success: true,
      msg: `user with id ${id} updated`,
      data: user
    })
  } catch(err) {
    next(err)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    res.json({
      success: true,
      msg: `user with id ${id} deleted`,
      data: user
    });
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
}