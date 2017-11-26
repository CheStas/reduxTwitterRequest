const path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    config = require('../webpack.config'),
    bodyParser = require('body-parser'),
    app = express(),
    compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

const routes = require('./routes/routes')(app);
