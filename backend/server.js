var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

// Use async/await for MongoDB connection
async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/est");
        console.log("DB Connectedddd!!!!!!!!!!!");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

// Apply CORS middleware before the routes
server.use(cors());

// Other middlewares
server.use(express.json());
server.use(routes);

connectToDatabase();

server.listen(8000, function check(error) {
    if (error) {
        console.error("Error starting server:", error);
    } else {
        console.log("Server started on port 8000");
    }
});
