const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('We are on posts');
});

router.get('/test', (req, res) => {
  res.send('We are on test posts');
});

module.exports = router;
