const router = require('express').Router();
const db = require('../db/index')

router.get("/", function (req, res) {

  db.getRates(function (err, rows) {
    if (err) res.send(err);
    res.send(rows);
  });


});

router.get("/:belt_id", function (req, res) {
  const belt_id = req.params.belt_id;
  db.getBeltRates(belt_id, function (err, rows) {
    if (err) res.send(err);
    res.send(rows);
  });


});

router.get("/:belt_id/last", function (req, res) {
  const belt_id = req.params.belt_id;
  db.getLastBeltRates(belt_id, function (err, rows) {
    if (err) res.send(err);
    res.send(rows);
  });


});



module.exports = router;