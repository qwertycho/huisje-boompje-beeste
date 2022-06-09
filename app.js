// begin Remco afblijven
// Requiring modules
const express = require('express');
const app = express();
const ejs = require('ejs');
var fs = require('fs');
const port = 3000;

app.use(express.static(__dirname + '/public'));

// dynamische rout gebaseerd op de param in de url
app.get('/:id', function (req, res) {

	ejs.renderFile('pages/' + req.params.id + ".ejs", {},
		{}, function (err, template) {
		if (err) {
			throw err;
		} else {
			res.end(template);
		}
	});
});


// harde route naar pagina
app.get('/', function (req, res) {

	// Render page using renderFile method
	ejs.renderFile('pages/index.ejs', {},
		{}, function (err, template) {
		if (err) {
			throw err;
		} else {
			res.end(template);
		}
	});
});

// Server setup
app.listen(port, function (error) {
	if (error)
		throw error;
	else
		console.log("Server is running on port: " + port);
});
