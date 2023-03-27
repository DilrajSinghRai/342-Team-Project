let mysql = require('mysql');
let config = require('./config.js');
const fetch = require('node-fetch');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require('express');
const app = express();
const port = process.env.PORT || 5001;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));


app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = 'SELECT mode FROM user WHERE userID = ?';
	console.log(sql);
	let data = [userID];
	console.log("API REACHED");

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/loadFacilityInfo', (req, res) => {

	let connection = mysql.createConnection(config);
	console.log('called')

	let sql = 'SELECT * FROM d3rai.facilitiesTable';
	

	connection.query(sql, (error, results, fields) => {
		console.log('here')
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		console.log( results)
		console.log(string)
		res.send({ express: string });
	});
	connection.end();
}); 

app.post('/api/addFacility', (req,res) => {

	let connection = mysql.createConnection(config);
	let sql = `INSERT INTO reviewFacility (facilityName, name, review) VALUE

	 ("${req.body.facilityType}","${req.body.name}", '${req.body.review}');`

	 console.log(sql)


	connection.query(sql,(error, results, fields) => {
		if (error){
			return console.error(error.message);
		}
		let string = JSON.stringify(results)
		res.send({express: string})

	});

	connection.end();


});

app.post('/api/addFilter', (req,res) => {

	let connection = mysql.createConnection(config);
	let sql = `INSERT INTO filter (facility, sport, day) VALUE

	 ("${req.body.facilityName}","${req.body.sport}", '${req.body.day}');`

	 console.log(sql)


	connection.query(sql,(error, results, fields) => {
		if (error){
			return console.error(error.message);
		}
		let string = JSON.stringify(results)
		res.send({express: string})

	});

	connection.end();


});

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server