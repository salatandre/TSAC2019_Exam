const router = require('express').Router();
const db = require('../db/index')



router.get("/", function (req, res) {

  db.getPositions(function (err, rows) {
    if (err) res.send(err);
    res.send(rows);
  });


});

router.get("/:bus_id", function (req, res) {
  const bus_id = req.params.bus_id;
  db.getBusPosition(bus_id, function (err, rows) {
    if (err) res.send(err);
    res.send(rows);
  });


});


router.get("/:bus_id/last", function (req, res) {
  const bus_id = req.params.bus_id;
  db.getLastBusPosition(bus_id, function (err, rows) {
    if (err) res.send(err);
    res.send(rows);
  });


});


module.exports = router;
