const express = require("express"); // Requires the Express module 
const http = require('http'); // Calls the express function to start a new Express application 
http.createServer(app).listen(3000); // start the server
let db;
const uri = "mongodb+srv://nodejs:nodejs@cluster0.chgmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
    db = client.db('cw2-db')
})
app.get('/lessons', function (req, res) {

})
app.post('/order', function (req, res) {

})
app.put('/lessons', function (req, res) {
  
})
app.get('/search', function (req, res) {
    
})
console.log('Server started!')