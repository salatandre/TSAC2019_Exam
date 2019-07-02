const express = require('express');
const router = express.Router();
const config = require('../config');
const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/index')

const connectionString = "postgres://" + config.db.user + ":" + config.db.password + "@" + config.db.dynamicIp + ":" + config.db.port + "/" + config.db.database;

const client = new pg.Client(connectionString);
router.use(cors());
router.use(bodyParser.json());


// TODO - modifica chiamate api con aggiunta controllers

/* router.get('/buses', (req, res) => {
  bus_id = req.body.bus_id
  client.connect();
  client.query(`SELECT b.id, b.capacity, b.name, d.people, d.open, p.lat, p.lon
	FROM (select * from public.buses) as b
inner join (select * from public.doors
		  	order by time desc limit 1) as d on (b.id = d.bus_id)
inner join (select * from public.position
		  	order by time desc limit 1) as p on (b.id = p.bus_id)`, (err, result) => {
    if (err) {
      res.status(500).json({
        err: err
      });
    }
    res.send(result.rows);
  });
}); */

router.get('/buses', function (req, res) {
  db.getAllBuses(function (err, rows) {
    if (err) res.send(err);
    res.send(rows)
  })
})
module.exports = router;
