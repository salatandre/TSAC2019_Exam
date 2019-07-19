const router = require('express').Router();
const db = require('../db/index')

router.get('/', function (req, res) {
  db.getAllBelts(function (err, rows) {
    if (err) res.send(err);
    res.send(rows)
  })
})

router.get("/:id", function (req, res) {
  const id = req.params.id;
  db.getSingleBelt(id, function (err, rows) {
    if (err) res.send(err);
    res.send(rows);
  });


});


module.exports = router;