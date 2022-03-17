const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signUp', userController.addUser, (req, res) => {
  res.status(200).send(res.locals.user);
});

router.post(
  '/makeAD',
  userController.getUserCharities,
  userController.parseUserCharities,
  userController.updateDatabaseUserCharities,
  (req, res) => res.status(200).send(res.locals.user)
);

router.put(
  '/changeFav',
  userController.getUserCharities,
  userController.updateFav,
  userController.updateDatabaseUserCharities,
  (req, res) => res.status(200).send(res.locals.user)
);

router.put('/login', userController.verifyUser, (req, res) =>
  res.status(200).send(res.locals.user)
);

module.exports = router;
