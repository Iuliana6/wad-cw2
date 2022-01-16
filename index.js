const express = require("express"); // Requires the Express module 
const http = require('http'); // Calls the express function to start a new Express application 
http.createServer(app).listen(3000); // start the server
console.log('Server started!')