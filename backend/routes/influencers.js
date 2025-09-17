const express = require('express');
const router = express.Router();
const { getInfluencers, getInfluencerById } = require('../controllers/influencerController');

router.get('/', getInfluencers);
router.get('/:id', getInfluencerById);

module.exports = router;