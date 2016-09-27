import express  from'express';
import inbox from 'inbox.json';

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Golidays' });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
    res.redirect('/');
});

/* GET inbox resource. */
router.get('/inbox', function (req, res, next) {
    res.redirect('/');
})

/* GET inbox subsequent request. */
router.get('/inbox/*', function (req, res, next) {
    res.redirect('/');
})

module.exports = router;
