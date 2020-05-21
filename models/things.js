const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const thingSchema = Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  imageURL: {type: String, required: true},
  userID: {type: String, required: true},
  price: {type: Number, required: true},
});

/*
** ex other required: unique, trim(whites paces), minlenght...
*/

module.exports = mongoose.model('thing', thingSchema);
