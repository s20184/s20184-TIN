const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/hello', (req,res) => {
    res.send('Hello world!');
})

app.get('/form', (req,res) => {
    res.render('form');
})

app.post('/formdata', (req,res) => {
    var username = req.body.username;
    var email = req.body.email;
    res.render('formdata', {
        username: username,
        email: email
    });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})