const Post = require('../models/Post');

module.exports = {
  store: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);

    post.likes += 1;

    await post.save();

    req.io.emit('like', post);

    return res.json(post);
  },
};
