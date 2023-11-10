const {model, Schema} = require('mongoose');

const incidentSchema = new Schema({
    title: String,
    description: String,
    address: String,
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model('Incident', incidentSchema);