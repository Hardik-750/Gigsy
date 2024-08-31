const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/gigsy');

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    isClient: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('user', userSchema);