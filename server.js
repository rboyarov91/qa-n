//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

router.get('/siteInfo', (req, resp) => {
	let testData = '[{"date":"May 13, 2016","Loadtime":" 7.72s","TTFB":" 0.253s","Start Render":" 1.505s","Visually Complete":" 10.199s","Speed Index":" 3364","DOM Elements":" 694",\
		"DOCTime":" 7.72s","DOCRequests":" 85","DOCBytesIn":" 3852 KB","FLTime":" 8.298s","FLRequests":" 98","FLBytesIn":" 3914 KB","200s":" 91","404s":" 0","Others":" 8","Site Search":"6,290","PageScore":" 59"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 64"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 59"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 58"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 65"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 70"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 59"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 43"},\
		{"date":"June 16, 2017","Loadtime":" 12.4s","TTFB":" 0.123s","Start Render":" 2.01s","Visually Complete":" 13.438s","Speed Index":" 4281","DOM Elements":" 703","DOCTime":" 6.98s",\
		"DOCRequests":" 102","DOCBytesIn":" 3987 KB","FLTime":" 7.32s","FLRequests":" 90","FLBytesIn":" 3213 KB","200s":" 104","404s":" 4","Others":" 5","Site Search":"6,290","PageScore":" 62"}]';
		resp.json(testData);
} )

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});