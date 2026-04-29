const express = require('express');
const router = express.Router();
const db = require('../config/db');

// rota para listar todos os logins
router.get('/logins', (req, res) => {
  db.query('SELECT * FROM Login', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

module.exports = router;