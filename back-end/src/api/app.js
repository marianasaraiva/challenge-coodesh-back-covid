require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

// testing connection 
app.get('/test', (_req, res) => {
  return res.json({ message: "Testing connection" });
});

module.exports = app;