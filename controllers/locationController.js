const mongoose = require("mongoose");
const Location = require('../models/Location');
const { ObjectId } = mongoose.Types;

// Display list of all Locations
const getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find()
    // .sort(['name', 'ascending'])
    res.json({
      success: true,
      msg: 'Show all locations',
      data: locations,
    })  
  } catch(err) {
    next(err)
  }
};

// Display one selected Location 
const getLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const location = await Location.findById(id);
        res.json({
            success: true,
            msg: 'Show selected location',
            data: location
        })
    } catch(err) {
        next(err)
    }
};

// Handle Location create on POST
const createLocation = async (req, res, next) => {
    try {
        const { name, longitude, latitude } = req.body;
        const location = await Location.create({ name, longitude, latitude });
        res.json({ success: true, msg: 'Show new location', data: location})
    } catch(err) {
        next(err)
    }
};

// Handle Location update on PUT
const updateLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, longitude, latitude } = req.body;
        const location = await Location.findByIdAndUpdate(id, { name, longitude, latitude }, { new: true});
        res.json({
            success: true,
            msg: `Selected location with id(${id}) updated`,
            data: location
        })
    } catch(err) {
        next(err)
    }
};

// Handle Location delete on DELETE
const deleteLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const location = await Location.findByIdAndDelete(id);
        res.json({
            success: true,
            msg: `Selected location with id(${id}) deleted`,
            data: location
        })
    } catch(err) {
        next(err)
    }
};

module.exports = {
    getLocations,
    getLocation,
    createLocation,
    deleteLocation,
    updateLocation
 }