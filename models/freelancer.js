const mongoose = require('mongoose');

const freelancerSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    profileimage: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
        length: 10,
    },
    professionalTitle: {
        type: String,
        required: true,
    },
    Bio: {
        type: String,
    },
    skills: {
        type: String,
    },
    experienceLevel: {
        type: String,
    },
    hourlyRate: {
        type: String,
    },
    preferredCommunication: {
        type: String,
    },
    linkedinprofile: {
        type: String,
    },
    githubprofile: {
        type: String,
    },
    xprofile: {
        type: String,
    },
    instagramprofile: {
        type: String,
    },
});

module.exports = mongoose.model('freelancer', freelancerSchema);