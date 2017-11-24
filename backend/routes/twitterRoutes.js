const router = require('express').Router();
const request = require('request');
const bearer_token = 'AAAAAAAAAAAAAAAAAAAAAAq13AAAAAAACiMObO2Ouy42H%2B00yg9F3rZVlmU%3DwFyg8xRTJbEmOp1fuS27UFWEFUQGf3oa0DKunPrpsUdNcoKmqu';

router.get(`/:query`, (req, res) => {
    console.log('works---');
    twitterService(req.params.query, (err, body) => {
        res.json(body);
    })
    
})

function twitterService(query, cb) {
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${query}`;
    request({ headers: { "Authorization": "Bearer " + bearer_token } , uri: url}, (err, res, body) => {
        console.log(body);
        cb(err, body)
    })
}

module.exports = router;