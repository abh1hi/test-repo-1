const mongoose = require('mongoose');

const InfluencerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    niche: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    socials: {
        instagram: String,
        youtube: String,
        tiktok: String
    },
    // You can add more fields like profile picture URL, etc.
});

module.exports = mongoose.model('Influencer', InfluencerSchema);