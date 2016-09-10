/**
 * Created by yanhong on 2016-09-10.
 */
var express = require('express');
var router = express.Router();

/* GET chat page. */
router.get('/', function(req, res, next) {
    res.render('chat', { title: 'WebDxD Chat Room' });
});

module.exports = router;