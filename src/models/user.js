const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: String,
    name: String,
    password: String,
    email: String,
});

module.exports = model('User', userSchema);