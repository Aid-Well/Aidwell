const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/makeAD', (req, res) => res.sendStatus(200));

router.put('/changeFav', (req, res) => res.sendStatus(200));

module.exports = router;
