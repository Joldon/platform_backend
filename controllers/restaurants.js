const mongoose = require("mongoose");
const Restaurant = require('../models/Restaurant');
// const City = require('../models/City');
// const Tag = require('../models/Tag');


const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find()
        .populate('tags')
        .populate('city');
    res.json({
         success: true,
         msg: 'show all restaurants',
         data: restaurants,
    });
  } catch(err) {
        next(err);
  }
};

const getRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;   
    const restaurant = await Restaurant.findById(id)
    .populate('tags')
    .populate('city');
  res.json({
      success: true,
      msg: 'show selected restaurant',
      data: restaurant,
    })
  } catch(err) {
    next(err)
  }
};

module.exports = {
  getRestaurant,
  getRestaurants,
 }