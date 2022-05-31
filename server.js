var express = require('express');
var cors = require('cors'); 
var app = express(); 

// CORS stands for Cros-Origin Resources Sharing. It allows us to relax the security applied to // an API
var corsOptions = {
    origin: "http://localhost:8081"
}
console.log("Is out project running?")