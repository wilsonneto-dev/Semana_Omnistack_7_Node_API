const multer = require("multer");
const path = require("path");
const uuidv4 = require("uuid/v4");

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: function(req, file, cb) {
      const fileExt = path.extname(file.originalname);
      const filename = `${uuidv4()}${fileExt}`;
      cb(null, filename);
    }
  })
};
