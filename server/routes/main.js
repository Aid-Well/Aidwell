const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();

router.put(
  '/findCharities',
  mainController.buildQuery,
  mainController.getCharities,
  mainController.processCharities,
  (req, res) => {
    res.set('Access-Control-Allow-Origin', ' * ');
    res.set('Content-Type', 'application/json');
    res.status(200).send(res.locals.parsed);
  }
);

module.exports = router;
