const express = require("express");
const api = express.Router();

const {getLocations, getLocation, createLocation, updateLocation, deleteLocation} = require('../controllers/locationController')

api
  .route('/')
  .post(createLocation)
  .get(getLocations)

api
  .route('/:id/')
  .put(updateLocation)
  .delete(deleteLocation)
  .get(getLocation)

module.exports = api;