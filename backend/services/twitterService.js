const request = require('request'),
    twitterConfig = require('../config/twitter.config');

module.exports = {
    getTwittersByQuery: (url, cb) => {
        const uri = `https://api.twitter.com/1.1/search/tweets.json?${url}`;
        request({ headers: { "Authorization": "Bearer " + twitterConfig.bearer_token }, uri }, (err, res, body) => {
            cb(err, body)
        })
    }
}
