var express = require('express');
var router = express.Router();
var db = require('../models');

// get all lists in a category
router.get('/:category/lists', (req, res) => {
    db.list.find({category: req.params.category})
        .then((lists) => res.json(lists))
        .catch((err) => res.send(err));
});

// get all sections in a category
router.get('/:category/sections', (req, res) => {
    db.section.find({category: req.params.category})
        .then((sections) => res.json(sections))
        .catch((err) => res.send(err));
});

// create new section
router.post('/new-section', (req, res) => {
    db.section.create(req.body)
        .then((newSection) => res.json(newSection))
        .catch((err) => res.send(err));
});

// create new list
router.post('/new-list', (req, res) => {
    db.list.create(req.body)
        .then((newList) => res.json(newList))
        .catch((err) => res.send(err));
});

module.exports = router;