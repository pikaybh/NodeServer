const express = require('express');
const path = require('path');
const app = express();
const port = "8080";

const http = require('http').createServer(app);
http.listen(port, function () {
    console.log('listening on ' + port)
});

var uploadRouter = require('./router/uploadRouter');

app.use('/upload', uploadRouter);
app.use(express.static(path.join(__dirname, 'react-test/build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'react-test/build/index.html'))
});
