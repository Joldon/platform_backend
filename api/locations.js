const express = require("express");
const api = express.Router();

const locationController = require('../controllers/locationController')

api
  .route("/")
  .post(locationController.createLocation)
  .get(locationController.getLocations)

api
  .route('/:id/')
  .put(locationController.updateLocation)
  .delete(locationController.deleteLocation)
  .get(locationController.getLocation)

module.exports = api;