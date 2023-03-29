const express = require('express');
const router = express.Router();

const Ads = require('../controllers/ads.controller');
const imageUpload = require('../utils/imageUpload');
const authMiddleware = require('../utils/authMiddleware');

router.get('/ads', Ads.getAllAds);
router.get('/ads/:id', Ads.getAdById);
router.post('/ads', authMiddleware, imageUpload.single('image'), Ads.createNewAd);
router.delete('/ads/:id', authMiddleware, Ads.deleteAdById);
router.put('/ads/:id', authMiddleware, Ads.editAd);
router.get('/ads/search/:searchPhrase', Ads.searchPhrase);

module.exports = router;