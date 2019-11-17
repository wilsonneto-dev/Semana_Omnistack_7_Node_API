/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const socket = require('socket.io');

const dotenv = require('./configs/dotenv');
const router = require('./router');
const mongoose = require('./configs/mongoose');

const app = express();
const httpServer = http.Server(app);
const io = socket(httpServer);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

const staticPath = path.resolve(__dirname, '..', 'uploads', 'resized');
app.use('/files', express.static(staticPath));

app.use(router);

httpServer.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server running...');
});
