const express = require('express');
const router = express.Router();
const posts = require('../posts');
const response = require('../network/response');

router.get('/', (req, res) => {
  if (posts) {
    response.success(req, res, posts, 200);
  } else {
    response.error(req, res);
  }
});
module.exports = router;
