const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//creating app
const app = express();
const apiPort = process.env.PORT || 5000;

//Adding routes to the app
const movieRouter = require('./routes/movie.route')


//Using body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(bodyParser.json())

//Connecting DB 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connected')
})

//creating GET request endpoint
app.get('/', (req,res) =>{
    res.send('Hello World')
})

//Using routes for movies
app.use('/api', movieRouter)


//Listing on PORT 5000
app.listen(apiPort, () =>console.log("Server listining on PORT:", apiPort))