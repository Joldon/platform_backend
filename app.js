require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;

const restaurants = require('./api/restaurants');
const cities = require('./api/cities');
const tags = require('./api/tags'); // very very important to include this quote Adam: very important something is working!
const errorHandler = require('./middlewares/error')
const connectDB = require('./dbinit');

const app = express();


connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => res.send('hello!'))
app.use('/restaurants', restaurants)
app.use('/cities', cities);
app.use('/tags', tags);  

app.use(errorHandler);

app.listen(process.env.PORT || port, () => console.log(`Started up server on http://localhost:${port}`.rainbow.bold.inverse));