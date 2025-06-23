const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  vehicleNo: String,
  location: String,
  status: { type: String, enum: ['Arrived', 'Not Arrived', 'Offline'], default: 'Not Arrived' },
});

const recordSchema = new mongoose.Schema({
  date: String,
  godam: String,
  entries: [entrySchema],
});

module.exports = mongoose.model('Record', recordSchema);