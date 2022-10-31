'use strict';

const express = require('express');

// Constants
const PORT = 3001;
const HOST = '0.0.0.0';
global.__basedir = __dirname;

// App
const app = express();
app.get('/', (req, res) => {
  res.json({
    "status": "success",
    "name": process.env.NAME,
  });
});

app.get("/images/:img_name", function (req, res) {
  var img_name = req.params.img_name;
  var filepath = __dirname + "/images/" + img_name;
  res.sendFile(filepath);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});