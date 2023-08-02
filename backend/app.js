const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/user');
const app = express();
const postRoutes = require('./routes/posts')


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;