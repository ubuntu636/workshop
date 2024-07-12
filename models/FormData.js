const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  usn: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('FormData', formDataSchema);
