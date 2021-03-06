//server.js
'use strict'

//first we import our dependencies...
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import api from './api'
/*
es5 approach
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
*/

//and create our instances
let app = express();
let router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
let port = process.env.API_PORT || 3001;

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
  //res.json({ message: 'API Initialized!'});
  res.json({data: api.getSiteInfo_Test()})
});

router.get('/siteInfo', (req, resp) => {
		resp.json(api.getSiteInfo_Test())
} )

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});