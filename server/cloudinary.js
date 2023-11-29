const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "posts",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [
      {
        width: 300,
        height: 300,
        gravity: "faces",
        crop: "fill",
      },
    ],
  },
});

const storage2 = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "users",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [
      {
        width: 300,
        height: 300,
        gravity: "faces",
        crop: "fill",
      },
    ],
  },
});
module.exports = {
  cloudinary,
  storage,
  storage2,
};
