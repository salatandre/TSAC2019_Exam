const express = require('express');
const router = express.Router();
const config = require('../config');
const pg = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');


const connectionString = "postgres://" + config.user + ":" + config.password + "@" + config.dynamicIp + ":" + config.port + "/" + config.database;

const client = new pg.Client(connectionString);
router.use(cors());
router.use(bodyParser.json());


// TODO - cambia tipo id su database in serial (perche sia sequenziale)
// TODO - modifica chiamate api con aggiunta controllers

router.get('/buses', (req, res) => {
  client.connect();
  client.query(`SELECT b.id, b.capacity, b.name, d.people, d.open, p.lat, p.lon
	FROM public.buses b
	join public.doors d ON (b.id = d.bus_id)
	left join public.position p ON (b.id = p.bus_id)`, (err, result) => {
    if (err) {
      res.status(500).json({
        err: err
      });
    }
    res.send(result.rows);
  });
});




module.exports = router;
