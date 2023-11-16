const { model, Schema } = require('mongoose');

const incidentSchema = new Schema({
  title: String,
  description: String,
  address: String,
  date: {
    type: Date,
    default: Date.now
  },
  name: String
});

module.exports = model('Incident', incidentSchema);
