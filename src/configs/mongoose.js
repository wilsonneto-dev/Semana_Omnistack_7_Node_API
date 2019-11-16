const mongoose = require("mongoose");
const dotenv = require("./dotenv");

mongoose.connect(process.env.NOSQL_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.export = mongoose;
