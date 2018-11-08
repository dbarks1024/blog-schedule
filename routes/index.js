const express = require('express'),
      router = express.Router(),
      Post = require('../models/posts');

router.post('/post', (req, res) => {
  newPost = {
    name: req.body.name,
    date: req.body.date,
    description: req.body.description
  }
  Post.create(newPost, (err, createdPost) => {
    console.log(createdPost);
    if(err) {
      res.send(err);
    }
  });
});

router.get('/post', (req, res) => {
  Post.find((err, foundPosts) => {
    res.json(foundPosts);
  })
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
