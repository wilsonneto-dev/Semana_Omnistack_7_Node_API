const Post = require("../models/Post");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    return res.send({ body: req.body });
  }
};
