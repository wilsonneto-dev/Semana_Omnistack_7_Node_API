const express = require("express");
const multer = require("multer");

const uploadConfig = require("../configs/upload");

const PostController = require("../controllers/PostController");

const router = express.Router();
const upload = multer(uploadConfig);

router.post("/posts", upload.single("image"), PostController.store);

module.exports = router;
