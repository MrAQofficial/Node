//Imports
const http = require('http');
const data = require('./data');
const fs = require('fs');
const path = require('path')
const express = require('express');
const ageFilter = require('./middleware');
const route = express.Router();


// Starting Express JS
const app = express();
app.set('view engine', 'ejs');

const pubDir = path.join(__dirname, 'public')
app.use(express.static(pubDir));

route.use(ageFilter);
//Routes
app.get('', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.sendFile(`${pubDir}/about.html`)
})
app.get('/profile', (req, res) => {
    const user = {
        name: 'Aqib',
        email: 'work@getMaxListeners.com'
    }
    res.render('profile', { user })
})
route.get('/login', (req, res) => {
    res.render('login')
})
app.use('/', route);

app.get('*', (req, res) => {
    res.sendFile(`${pubDir}/404.html`)
})
app.listen(3030);
