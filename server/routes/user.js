const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signUp', userController.addUser, (req, res) =>
  res.status(200).send(res.locals.user)
);

router.post('/makeAD', (req, res) => res.sendStatus(200));

router.put('/changeFav', (req, res) => res.sendStatus(200));

router.put('/login', userController.verifyUser, (req, res) =>
  res.status(200).send(res.locals.user)
);

module.exports = router;
