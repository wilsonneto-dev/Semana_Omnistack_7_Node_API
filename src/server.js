const express = require("express");

const dotenv = require("./configs/dotenv");
const router = require("./router");
const mongoose = require("./configs/mongoose");

const app = express();
app.use(router);

app.listen(process.env.SERVER_PORT, () => {
  console.log("server running...");
});
