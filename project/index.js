const express = require('express');
const cors = require('cors');
const dbConfig = require ('./db.config.js');
const dbCreate = require('./db.create.js');
const mysql = require('mysql2');

const app = express();
const port = 8080;
app.use(cors());

/*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});*/


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ test: "Test" });
});

app.get("/home", (req, res) => {
    res.json({ test: "Test" });
});

const connection = mysql.createConnection({
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.db
    }
)

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to database.");
})

console.log(dbCreate(connection));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})