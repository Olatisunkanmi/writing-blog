const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// THis is to encrypt 
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {

}).then(console.log('Connected to MongDB'))
.catch((err) => console.log(err))


console.log('Hello there!');

app.listen('5000', () => {
    console.log('Backend is running');
}) 