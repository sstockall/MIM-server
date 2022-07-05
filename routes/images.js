const express = require("express");
const router = express.Router();
const multer  = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
  cloud_name: "dob0dukux",
  api_key: "361674625998842",
  api_secret: "_P_axxgfSVeDSWudMn6Xoce7mKw",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'mim-uploads',
      format: async (req, file) => 'png', 
      public_id: (req, file) => req.file
    },
  });

const upload = multer({ storage: storage })

router.post("/", upload.single('image'), (req,res,next) => {
  console.log(req.file)
    res.json(req.file);
})

router.get("/:image",(req,res) => {
    res.sendFile(req.params.image, { root: './uploads' })
});

module.exports = router;