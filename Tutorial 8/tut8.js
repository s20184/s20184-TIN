const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/hello', (req,res) => {
    res.send('Hello world!');
})

app.get('/form', (req,res) => {
    res.render('form');
})

app.post('/formdata', (req,res) => {
    var username = req.body.username;
    var email = req.body.email;
    var age = req.body.age;
    res.render('formdata', {
        username: username,
        email: email,
        age: age
    });
})

app.post('/jsondata', (req,res) => {
    var name = req.body.name;
    var species = req.body.species;
    var toy = req.body.toy;
    res.render('jsondata', {
        name: name,
        species: species,
        toy: toy
    });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})