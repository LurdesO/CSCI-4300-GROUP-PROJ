const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const placeSchema = new Schema({
    title: { type: String, required: true }, //  must not be empty
    description: { type: String, required: true }, //  must not be empty
    image: { type: String, required: true }, // use a url here for faster access
    address: { type: String, required: true }, //  must not be empty
    creator: { type: String, required: true } //  will be autogenerated when we add the user model
});

module.exports = mongoose.model('Place', placeSchema); // create the Place model