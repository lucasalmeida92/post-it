var express = require('express'),
		app = express(),
		postits = require('./postits');

// ==== VIEW (Single Page)
app.get('/', function (req, res) {
		res.send('Hello Word!');
});

// ==== API ENDPOINTS
app.get('/postits', postits.index);
app.post('/postits', postits.create);
app.put('/postits', postits.update);
app.delete('/postits', postits.delete);

// ==== SERVER
app.listen(3000, function () {
  console.log('PostIt app listening on port 3000!');
});
