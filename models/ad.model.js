const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: false },
  price: { type: Number, required: true },
  localization: { type: String, required: true },
  user: { type: String, required: true },
  phone: { type: Number, required: true },
});

adSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Ad', adSchema);