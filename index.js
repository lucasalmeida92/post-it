var express = require('express'),
		app = express(),
		postits = require('./postits');

// ==== Serve Static Files
app.use(express.static(__dirname + '/public'));

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
