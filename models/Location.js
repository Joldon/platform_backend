const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    longitude: {
        type: Number,
        required: true,
        maxlength: [20],
      
    },
    latitude: {
        type: Number,
        required: true,
        maxlength: [20]
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