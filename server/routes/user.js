const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/addUser', userController.addUser, (req, res) =>
  res.sendStatus(200)
);

router.post('/makeAD', (req, res) => res.sendStatus(200));

router.put('/changeFav', (req, res) => res.sendStatus(200));

module.exports = router;
