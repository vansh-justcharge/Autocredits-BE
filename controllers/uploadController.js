const cloudinary = require('../cloudinary/cloudinary');
const fs = require('fs');

const uploadFileToCloudinary = async (req, res) => {
  try {
    const filePath = req.file.path;

    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'documents',
    });

    fs.unlinkSync(filePath); 
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadFileToCloudinary };
