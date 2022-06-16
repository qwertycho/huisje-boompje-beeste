// begin Remco afblijven
// Requiring modules
const express = require('express');
const app = express();
const ejs = require('ejs');
var fs = require('fs');
const port = 3000;

// voor post request
var myParser = require("body-parser");
app.use(myParser.urlencoded({extended : true}));
app.use(express.json({
	type: ['application/json', 'text/plain']
  }))

app.use(express.static(__dirname + '/public'));


app.post('/data', function (req, res) {

	console.log(req.body);

	var sqlite3 = require('sqlite3').verbose();

	try {
	  var db = new sqlite3.Database("./public/script/data.db");
	} catch (err) {
	  console.log(err);
	}

	function accessData(){
		var ID = 0;
		db.each("SELECT * FROM formdata ORDER BY ID DESC LIMIT 1", function(err, row) {
			if(err) return console.log(err.message);
			console.log(row);
			ID = row.ID;
			console.log(ID);
			ID++;
		});
		insertData(ID);
	}

	accessData();

	function insertData(ID){
		console.log( "ins" +ID);
		var insertQuery = db.prepare("INSERT INTO formdata VALUES (?,?,?,?,?,?,?)");
		
		// de eerste waarde is de ID, de rest is de data, laat ID leeg
		insertQuery.run(null, req.body.naam, req.body.sirname, req.body.email, req.body.bericht, req.body.bod, req.body.villa);
		insertQuery.finalize();
		console.log("Data inserted successfully...");
	}

	function writeData() {
		document.getElementById("dataTabel").innerHTML = ""
	}

	db.close();

});

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
