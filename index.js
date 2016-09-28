var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		postits = require('./postits');

// ==== Serve Static Files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// ==== API (Endpoints)
app.get('/api/postits', postits.index);
app.post('/api/postits', postits.create);
app.put('/api/postits', postits.update);
app.delete('/api/postits', postits.delete);

// ==== Application Front-End (Single Page)
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

// ==== SERVER
app.listen(3000, function () {
  console.log('PostIt app listening on port 3000!');
});
