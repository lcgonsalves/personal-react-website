const   express = require('express'),
        path = require('path'),
        app = express(),
        port = process.env.PORT || 8080,
        bodyParser = require('body-parser');

var categoryRoutes  = require('./routes/category');
var contentRoutes   = require('./routes/content');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));
app.use('/categories', categoryRoutes);
app.use('/content', contentRoutes);

// return built React app
app.get('/', function(req, res) {
    res.status(200);
    res.sendFile(path.join(__dirname + './client/build/index.html'),
        (err) => res.status(500).send(err));
});

// fetch resume from google api, send back
app.get('/resume', function(req, res) {

});

app.listen(port, function () {
    console.log("Leo's server running on " + port);
});
