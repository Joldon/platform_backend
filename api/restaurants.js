const express = require("express");

const {
  getRestaurant,
  getRestaurants,
} = require('../controllers/restaurants')

const api = express.Router();

api
  .route("/")
  .get(getRestaurants)

api
  .route('/:id')
  .get(getRestaurant)

module.exports = api;