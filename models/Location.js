const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    longitude: {
        type: Double,
        required: false,
    },
    latitude: {
        type: Double,
        required: false,
    },
  });

// Virtual for location's URL
LocationSchema
    .virtual('url')
    .get(function () {
      return '/location/' + this._id;
    });

module.exports = mongoose.model('Location', LocationSchema);

// (Location)
//   location_id
//       objectId
//   longitude
//       type: number
//   latitude
//       type: number