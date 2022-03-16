const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = 3000;
const userRouter = require('./routes/user');
const mainRouter = require('./routes/main');

app.use(express.urlencoded({ extended: false }));

// // Routes
app.use('/main', mainRouter);
app.use('/user', userRouter);
// app.get('/test', (req, res) => res.status(200).send({ hello: 'world' })); // For testing purposes
// Routes

// Page not found
app.use((req, res) => {
  res.status(404).send("This is not the page you're looking for...");
});
// Page not found

// Error handling
app.use((err, req, res) => {
  console.log('err', err)
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.status, errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
// Error handling

// Server actually starts in ./server/start.js for testing purposes

module.exports = app;
