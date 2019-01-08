const express = require('express'),
  moment = require('moment'),
  router = express.Router(),
  Request = require('../models/requests');

router.post('/request', (req, res) => {
  const newRequest = {
    topic: req.body.topic,
    category: req.body.category,
    date: moment(),
  };
  if (newRequest.topic === undefined || newRequest.category === undefined) {
    res.status(500).json(500, 'no topic or category');
  } else {
    Request.create(newRequest, (err, createdRequest) => {
      console.log(createdRequest);
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(createdRequest);
      }
    });
  }
});

router.delete('/request/:id', (req, res) => {
  Request.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(err.status || 500).json(err);
    } else {
      res.send('success');
    }
  });
});

router.get('/request/:id', (req, res) => {
  Request.findById(req.params.id, (err, foundRequest) => {
    if (err) {
      res.status(err.status || 500).json(err);
    } else {
      res.json(foundRequest);
    }
  });
});

router.get('/request', (req, res) => {
  Request.find((err, foundRequests) => {
    if (err) {
      res.status(err.status || 500).json(err);
    } else {
      res.json(foundRequests);
    }
  });
});

module.exports = router;