const express = require("express");
const api = express.Router();
const {
  getLocations,
  getLocation,
  createLocation,
  deleteLocation,
  updateLocation
} = require('../controllers/locations');


api
  .route("/")
  .get(getLocations)
  .post(createLocation)

api
    .route('/:id')
    .get(getLocation)
    .put(updateLocation)
    .delete(deleteLocation)

  module.exports = api;