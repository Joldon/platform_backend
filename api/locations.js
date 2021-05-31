const express = require("express");
const api = express.Router();

const locationController = require('../controllers/locationController')

api
  .route("/create")
  .post(locationController.createLocation)

api
  .route('/:id/update')
  .put(locationController.updateLocation)

  api
  .route('/:id/delete')
  .delete(locationController.deleteLocation)

api
  .route('/:id')
  .get(locationController.getLocation)

api
  .route("/")
  .get(locationController.getLocations)

module.exports = api;