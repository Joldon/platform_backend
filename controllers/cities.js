const mongoose = require("mongoose");
const Restaurant = require('../models/Restaurant');
const City = require('../models/City');


const getCities = async (req, res, next) => {
  try {
    const cities = await City.find();
    res.json({
      success: true,
      msg: 'show all cities',
      data: cities,
    })  
  } catch(err) {
    next(err)
  }
};

const getCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const city = await City.findById(id);
    res.json({
      success: true,
      msg: 'show selected Cities',
      data: city,
    })
  } catch(err) {
    next(err)
  }

};

module.exports = {
  getCity,
  getCities,
 }