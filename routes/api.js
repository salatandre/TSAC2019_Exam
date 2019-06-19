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


router.get('/buses', (req, res) => {
  client.connect();
  client.query(`SELECT id, capacity, name FROM public.buses`, (err, result) => {
    if (err) {
      res.status(500).json({
        err: err
      });
    }
    res.send(result.rows);
  });
});



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



module.exports = router;
