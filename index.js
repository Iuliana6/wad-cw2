const express = require("express"); // Requires the Express module 
const http = require('http'); // Calls the express function to start a new Express application 
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json())
let db;
const uri = "mongodb+srv://nodejs:nodejs@cluster0.chgmy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
    db = client.db('cw2-db')
})
app.get('/lessons', function (req, res) {
    db.collection("lesson").find().toArray(function (err, result) {
        if (err) throw err;
        res.end(JSON.stringify({ result: result }))
    });
})
app.post('/order', function (req, res) {
    db.collection("order").insertOne({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        subject: req.body.subject,
        quantity: req.body.quantity
    }, function (err, res) {
        if (err) throw err;
    });
})
app.put('/lessons', function (req, res) {
    db.collection("lesson").updateOne({ subject: req.body.subject }, { $set: { space: req.body.quantity } }, function (err, res) {
        if (err) throw err
    })
})
app.get('/search', function (req, res) {

})
http.createServer(app).listen(3000); // start the server
console.log('Server started!')