require('dotenv').config();

const express = require("express");

const app = express();

const router = require('./utils/router.js');

// middleware de nettoyage du body (anti XSS)
const bodySanitizer = require('./middlewares/body-sanitizer');

const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware qui nettoie les body
app.use(bodySanitizer);

app.use(router);


// 
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Skedulap server listening @ http://localhost:${PORT}`);
});