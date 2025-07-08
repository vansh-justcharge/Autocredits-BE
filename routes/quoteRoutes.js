const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.post('/create', quoteController.createQuote);
router.get('/get', quoteController.getAllQuote);
router.get('/get/:id', quoteController.getQuoteById);
router.put('/update/:id', quoteController.updateQuote);
router.delete('/delete/:id', quoteController.deleteQuote);

module.exports = router;
