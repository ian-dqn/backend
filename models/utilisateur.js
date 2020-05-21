const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, minlenght: 6, required: true },
  expert: { type: Array },
 username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
 // pseudo: { type: String, required: true, unique: true },
 // local: { type: String, required: true },
 // dispo: { type: String },
 // description: { type: String },
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);
