const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// router.get('/test', (req, res) => {
//   res.send('We are on tes posts');
// });

// SUBMITS A POST
router.post('/', async (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// SPECIFIC POST
router.get('/:postId', async (req, res) => {
  // params olan kısım postmanda url'in sonuna eklenen kısımdır
  try {
    console.log(req.params.postId);
    const post = await Post.findById(req.params.postId);

    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete Post
router.delete('/:postId', async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update Post
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get('/specific', (req, res) => {
  res.send('Specific post');
});

module.exports = router;
