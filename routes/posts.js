const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', (req, res) => {
  res.send('We are on posts');
});

router.get('/test', (req, res) => {
  res.send('We are on test posts');
});

router.post('/', (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description,
  });
});

module.exports = router;
