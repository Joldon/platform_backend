const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please add a email'],
        maxlength: [30, 'The email can be max 30 chars long']
    },
    nickname: {
        type: String,
        required: [true, 'Please add a nickname'],
        maxlength: [10, 'The surname can be max 10 chars long']
    }
});

// User --> users --> associates the schema to the collection
module.exports = mongoose.model('User', UserSchema);