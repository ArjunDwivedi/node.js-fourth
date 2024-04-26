const express = require('express');
const router = express.Router();

router.get('/second', (req, res, next) => {
    res.send('Say hello to basics again');
});

module.exports = router;