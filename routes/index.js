import express  from'express';
import inbox from 'inbox.json';

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Golidays' });
});

router.get('/home', function (req, res, next) {
    res.redirect('/');
});

router.get('/inbox', function (req, res, next) {
    res.json(inbox)
})

router.get('/inbox/*', function (req, res, next) {
    res.redirect('/');
})

module.exports = router;
