const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: 'dnhdsqa63',
  api_key: '816554649452314',
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;
