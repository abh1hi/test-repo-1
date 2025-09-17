const Influencer = require('../models/Influencer');

// @route   GET /api/influencers
// @desc    Get all influencers
exports.getInfluencers = async (req, res) => {
    try {
        const influencers = await Influencer.find();
        res.json(influencers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @route   GET /api/influencers/:id
// @desc    Get a single influencer by ID
exports.getInfluencerById = async (req, res) => {
    try {
        const influencer = await Influencer.findById(req.params.id);
        if (!influencer) {
            return res.status(404).json({ msg: 'Influencer not found' });
        }
        res.json(influencer);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Influencer not found' });
        }
        res.status(500).send('Server error');
    }
};