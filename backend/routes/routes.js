const postsRoutes = require('./twitterRoutes');

module.exports = function (app) {
    app.use('/api/twitter', postsRoutes);
};
