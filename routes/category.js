const express = require('express'),
  router = express.Router(),
  Category = require('../models/category');

router.post('/', (req, res) => {
  const newPost = {
    name: req.body.name,
    date: req.body.date,
    description: req.body.description
  };
  Category.create(newPost, (err, newPost) => {
    if (err) {
      res.send(err);
    } else {
      res.json(newPost);
    }
  });
});

router.put('/:id', (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body.post, (err, updatedPost) => {
    if(err) {
      res.send(err);
    } else {
      res.json(updatedPost);
    }
  });
});

router.delete('/:id', (req, res) => {
  Category.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      res.send(err);
    } else{
      res.send('success');
    }
  });
});

router.get('/:id', (req, res) => {
  Category.findById(req.params.id, (err, foundCategory) => {
    if(err) {
      res.send(err);
    } else {
      res.json(foundCategory);
    }
  });
});

router.get('/', (req, res) => {
  Category.find((err, foundCategory) => {
    if(err){
      res.send(err);
    } else{
      res.json(foundCategory);
    }
  });
});

module.exports = router;