const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    longitude: {
        type: Number,
        required: [false],
    },
    latitude: {
        type: Number,
        required: [false],
    },
  });
  
  module.exports = mongoose.model('Location', LocationSchema);

// (Location)
//   location_id
//       objectId
//   longitude
//       type: number
//   latitude
//       type: number