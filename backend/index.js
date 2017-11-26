const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

http.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.static(__dirname + './../dist'));

const routes = require('./routes/routes')(app);
