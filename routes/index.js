const express = require('express'),
  router = express.Router(),
  Post = require('../models/posts');

router.post('/post', (req, res) => {
  const newPost = {
    name: req.body.name,
    date: req.body.date,
    description: req.body.description
  };
  Post.create(newPost, (err, newPost) => {
    if (err) {
      res.send(err);
    } else {
      res.json(newPost);
    }
  });
});

router.put('/post/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body.post, (err, updatedPost) => {
    if(err) {
      res.send(err);
    } else {
      res.json(updatedPost);
    }
  });
});

router.delete('/post/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      res.send(err);
    } else{
      res.send('success');
    }
  });
});

router.get('/post/:id', (req, res) => {
  Post.findById(req.params.id, (err, foundPost) => {
    if(err) {
      res.send(err);
    } else {
      res.json(foundPost);
    }
  });
});

router.get('/post', (req, res) => {
  Post.find((err, foundPosts) => {
    if(err){
      res.send(err);
    } else{
      res.json(foundPosts);
    }
  });
});

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Express'
  });
});


module.exports = router;