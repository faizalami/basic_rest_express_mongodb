/**
 * @author faizalami
 * @type {*|createApplication}
 */

var express = require('express');
var router = express.Router();
var Items = require('../models/items');

/**
 * get all items
 */
router.get('/all', function(req, res, next) {
    Items.find({}, function (err, items) {
        if(err) {
            res.json({
                status: false,
                message: err.message,
                data: null
            })
        } else {
            res.json({
                status: true,
                message: 'Items list',
                data: items
            })
        }
    })
});

/**
 * get item
 */
router.get('/get/:id', function (req, res, next) {
    Items.findOne({_id: req.params.id}, function (err, items) {
        if(err) {
            res.json({
                status: false,
                message: err.message,
                data: null
            })
        } else {
            res.json({
                status: true,
                message: 'Item',
                data: items
            })
        }
    })
});

/**
 * create new item
 */
router.post('/create', function(req, res, next) {
    Items.create(req.body, function (err, items) {
        if(err) {
            res.json({
                status: false,
                message: err.message,
                data: null
            })
        } else {
            res.json({
                status: true,
                message: 'Create Item Success',
                data: items
            })
        }
    })
});

/**
 * update item
 */
router.put('/update/:id', function (req, res, next) {
    Items.update({_id: req.params.id}, req.body, function (err, items) {
        if(err) {
            res.json({
                status: false,
                message: err.message,
                data: null
            })
        } else {
            res.json({
                status: true,
                message: 'Update Item Success',
                data: items
            })
        }
    })
});

/**
 * delete item
 */
router.delete('/delete/:id', function (req, res, next) {
    Items.remove({_id: req.params.id}, function (err) {
        if(err) {
            res.json({
                status: false,
                message: err.message,
                data: null
            })
        } else {
            res.json({
                status: true,
                message: 'Delete Item Success',
                data: null
            })
        }
    })
});

module.exports = router;
