const express = require('express'),
  router = express.Router(),
  Category = require('../models/category');

router.post('/', (req, res) => {
  const newCategory = {
    name: req.body.name,
  };
  Category.create(newCategory, (err, newCategory) => {
    if (err) {
      res.send(err);
    } else {
      res.json(newCategory);
    }
  });
});

router.put('/:id', (req, res) => {
  const updateData = {
    name: req.body.name
  };
  Category.findByIdAndUpdate(req.params.id, updateData, (err) => {
    if(err) {
      res.send(err);
    } else {
      res.send('success');
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