const mongoose = require("mongoose");
const Location = require('../models/Location');

// const { ObjectId } = mongoose.Types;

const getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    res.json({
      success: true,
      msg: 'show all locations',
      data: locations,
    })  
  } catch(err) {
    next(err)
  }
};

const getLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const location = await Location.findById(id);
        res.json({
            success: true,
            msg: 'show selected location',
            data: location
        })
    } catch(err) {
        next(err)
    }
};

const createLocation = async (req, res, next) => {
    try {
        const { longitude, latitude } = req.body;
        const location = await Location.create({ longitude, latitude });
        res.json({ success: true, msg: 'show new location', data: location})
    } catch(err) {
        next(err)
    }
};

const updateLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { longitude, latitude } = req.body;
        const location = await Location.findByIdAndUpdate(id, { longitude, latitude }, { new: true});
        res.json({
            success: true,
            msg: `location with ${id} updated`,
            data: location
        })
    } catch(err) {
        next(err)
    }
};

const deleteLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const location = await Location.findByIdAndDelete(id);
        res.json({
            success: true,
            msg: `location with id ${id} deleted`,
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