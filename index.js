var express = require('express')
var admin = require("firebase-admin")
var bodyParser = require('body-parser')
var serviceAccount = require("./squadalert-5db5d-firebase-adminsdk-peifu-3f25879892.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://squadalert-5db5d.firebaseio.com/"
});

var options = {
  priority: "high",
  timeToLive: 60 * 60 *24
};

var app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/sendNotifications', function (req, res) {
	const { topic, description } = req.body	

	var payload = {
	  notification: {
	    title: description
	  }
	};

	admin.messaging().sendToTopic(topic, payload, options)
		.then()
		.catch(err => console.log(err))
		console.log(description)
		res.send(topic)
	})

app.listen(3000)