const express = require('express');
const path = require('path');
const app = express();

app.listen(8083, function() {
	console.log('listening on 8083');
});

app.use(express.static(path.join(__dirname, 'front/build')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/front/build/index.html'))
})
