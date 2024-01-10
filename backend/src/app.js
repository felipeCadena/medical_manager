const express = require('express');
const login = require('./routes/login');
// const authMiddleware = require('./middleware/auth.middleware');

const app = express();

app.use(express.json());

app.use('/login', login);

// app.use(authMiddleware);

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado: ${err.message}` });
});

module.exports = app;
