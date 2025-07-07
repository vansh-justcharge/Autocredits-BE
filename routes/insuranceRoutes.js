const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insuranceController');

router.post('/create', insuranceController.createInsurance);
router.get('/get', insuranceController.getAllInsurances);
router.get('/get/:id', insuranceController.getInsuranceById);
router.put('/update/:id', insuranceController.updateInsurance);
router.delete('/delete/:id', insuranceController.deleteInsurance);

module.exports = router;
