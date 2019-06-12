const express = require('express');
const multer = require('multer');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();

const upConfig = require('./config/upload');
const upload = multer(upConfig);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
