const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, default: '', required: true },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    default: '',
    required: true
  },
  password: { type: String, default: '', required: true }
});

module.exports = mongoose.model('user', UserSchema);
