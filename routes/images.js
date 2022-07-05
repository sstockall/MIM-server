const express = require("express");
const router = express.Router();
const multer  = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'mim-uploads',
      format: async (req, file) => 'png', 
      public_id: (req, file) => 'original_name',
    },
  });

const upload = multer({ storage: storage })

router.post("/", upload.single('image'), (req,res,next) => {
    res.json(req.file);
})

router.get("/:image",(req,res) => {
    res.sendFile(req.params.image, { root: './uploads' })
});

module.exports = router;