var express = require('express');
var router = express.Router();
var db = require('../models');

// get all categories in database
router.get('/all', (req, res) => {
    db.category.find()
        .then((categories) => res.status(200).json(categories))
        .catch((err) => res.send(err));
});

router.get('/home', (req, res) => {
    db.category.find({page: 'home'})
        .then((categories) => res.status(200).json(categories))
        .catch((err) => res.send(err));
});

router.get('/portfolio', (req, res) => {
    db.category.find({page: 'portfolio'})
        .then((categories) => res.status(200).json(categories))
        .catch((err) => res.send(err));
});

// add new category
router.post('/new-category/', (req, res) => {
    db.category.create(req.body)
        .then((newCategory) => res.status(201).json(newCategory))
        .catch((err) => res.send(err));
});

module.exports = router;