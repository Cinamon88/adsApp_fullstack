const express = require('express');
const router = express.Router();

const Ads = require('../controllers/ads.controller');
const imageUpload = require('../utils/imageUpload');
const authMiddleware = require('../utils/authMiddleware');

router.get('/ads', Ads.getAll);
router.get('/ads/:id', Ads.getById);
router.post('/ads', authMiddleware, imageUpload.single('image'), Ads.newAd);
router.delete('/ads/:id', authMiddleware, Ads.deleteById);
router.put('/ads/:id', authMiddleware, Ads.editAd);
router.get('/ads/search/:searchPhrase', Ads.searchPhrase);

module.exports = router;