const router = require('express').Router(),
    twitterService = require('../services/twitterService');

router.get(`/:query`, (req, res) => {
    twitterService.getTwittersByQuery(req.params.query, (err, body) => {
        if (!err) {
            res.data = body;
            res.json(body);
        } else {
            res.status(400);
            res.json(err);
        }
    })
})

module.exports = router;
