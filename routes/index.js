var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/bestsellerstatistic', function(req, res, next) {
  res.render('bestsellerstatistic');
});

router.get('/ordercomplete', function(req, res, next) {
  res.render('ordercomplete');
});

router.get('/orderdelivering', function(req, res, next) {
  res.render('orderdelivering');
});

router.get('/ordermanagement', function(req, res, next) {
  res.render('ordermanagement');
});

router.get('/orderpending', function(req, res, next) {
  res.render('orderpending');
});

router.get('/productmanagement', function(req, res, next) {
  res.render('productmanagement');
});

router.get('/salestatistic', function(req, res, next) {
  res.render('salestatistic');
});

router.get('/statisticmanagement', function(req, res, next) {
  res.render('statisticmanagement');
});

router.get('/updateinfo', function(req, res, next) {
  res.render('updateinfo');
});

router.get('/usermanagement', function(req, res, next) {
  res.render('usermanagement');
});

module.exports = router;
