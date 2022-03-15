const express = require('express');
const userController = require('../controllers/mainController');
const router = express.Router();

router.get('/findCharities', 
  (req, res) => res.sendStatus(200)
)

module.exportss = router;