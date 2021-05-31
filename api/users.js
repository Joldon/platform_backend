const express = require("express");
const api = express.Router();
  
const userController = require('../controllers/userController')
  
api
  .route("/create")
  .post(userController.createUser)
  
api
  .route('/:id/update')
  .put(userController.updateUser)
  
api
  .route('/:id/delete')
  .delete(userController.deleteUser)
  
api
  .route('/:id')
  .get(userController.getUser)
  
api
  .route("/")
  .get(userController.getUsers)

module.exports = api;