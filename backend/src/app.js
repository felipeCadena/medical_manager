const express = require('express');
const login = require('./routes/login');

const app = express();

app.use(express.json());

app.use('/login', login);

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = app;
