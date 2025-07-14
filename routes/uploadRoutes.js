const express = require('express');
const multer = require('multer');
const { uploadFileToCloudinary } = require('../controllers/uploadController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); 

router.post('/file', upload.single('file'), uploadFileToCloudinary); 

module.exports = router;
