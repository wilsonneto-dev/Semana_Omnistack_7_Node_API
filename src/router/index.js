const express = require('express');
const multer = require('multer');

const uploadConfig = require('../configs/upload');

const PostController = require('../controllers/PostController');
const LikeController = require('../controllers/LikeController');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/posts', upload.single('image'), PostController.store);
router.get('/posts', PostController.index);

router.post('/posts/:id/likes', LikeController.store);

module.exports = router;
