const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon')

const PostSchema = new Schema({
    region : { type: String, required: true, enum:['Eastern Caribbean', 'South Pacific', 'West Pacific', 'West Africa', 'East Africa'], default:''},
    country : {type: String, required: true },
    locations : { type: Schema.Types.ObjectId, ref: 'Location', required: false },
    // locationId : { type: Schema.Types.ObjectId, ref: 'Location', required: false },
    // locationId: { type: mongoose.Schema.ObjectId, ref: 'Location', required: false },
    title : { type: String, required: true },
    story : { type: String, required: true },
    image : { type: String, required: false }, //picture=url in MongoDB
    email : { type: String, required: false },
    nickname: { type: String, required: true },
    // user: { type: Schema.Types.ObjectId, ref: 'User', required: false}, //user=nickname in MongoDB
    status: { type: Boolean, required: true, default: false },
    date: {type: Date, default: Date.now}
  });
 
PostSchema
    .virtual('post_date')
    .get(function () {
        return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
    });

// Virtual for post's URL
PostSchema
    .virtual('url')
    .get(function () {
      return '/post/' + this._id;
    });

module.exports = mongoose.model('Post', PostSchema);
   
  //   region of origin
  //   type: string    |
  //   required: F     |
  //   enum: ['Carribean', 'North America', '', ''] - dropdown
  
  // country of origin
  //   type: string
  //   required: T
  
  // city/village of origin
  //   type: string
  //   required: T
  
  // location_id
  //   ref: location
  //   {
      //       location_id:
      //       longitude:
      //       latitude:            
      //   }
    // title
    //   type: string
    // story
    //   type: string
    // picture
    //   type: string
    // status
    //   type: boolean      
    // user_id(ref)
    //   objectId
    // story_id
    //   objectId