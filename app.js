require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;

const locationApi = require('./api/locations');
// const userApi = require('./api/users');
const postApi = require('./api/posts')
bodyParser = require('body-parser');

const errorHandler = require('./middlewares/error')
const connectDB = require('./dbinit');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.use('/posts', postApi)
app.use('/locations', locationApi);
// app.use('/users', userApi)

app.use(errorHandler);

app.listen(process.env.PORT || port, () => console.log(`Started up server on http://localhost:${port}`.rainbow.bold.inverse));
