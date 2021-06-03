const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    id : { type:Schema.Types.ObjectId },
    name: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
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