const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  

  