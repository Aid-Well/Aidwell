const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;
const userRouter = require('./routes/user');
const mainRouter = require('./routes/main');

app.use(express.json());

// // Routes
app.use('/main', mainRouter);
app.use('/user', userRouter);
// Routes

// Page not found
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);
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

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
// Start server

module.exports = app;
