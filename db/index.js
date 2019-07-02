const db = require('./db')

module.exports = {

  getAllBuses(callback) {
    db.query('SELECT * FROM public.buses')
      .then(res => callback(null, res.rows))
      .catch(err => callback(err, null))
  },

  getSingleBus(bus_id, callback) {
    timescale.query('SELECT * FROM public.buses WHERE id= $1;', [bus_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },


  getLastBusPosition(bus_id, callback) {
    db.query('SELECT * FROM public."position" WHERE bus_id = $1 order by time desc limit 1;', [bus_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },

  getPositions(callback) {
    db.query('SELECT * FROM public."position";')
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },
  getBusPosition(bus_id, callback) {
    db.query('SELECT * FROM public."position" WHERE bus_id = $1;', [bus_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },

  getDoors(callback) {
    db.query('SELECT * FROM public.doors;')
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },
  getBusDoors(bus_id, callback) {
    db.query('SELECT * FROM public.doors WHERE bus_id= $1;', [bus_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },
  getLastBusDoors(bus_id, callback) {
    db.query('SELECT * FROM public.doors WHERE bus_id = $1 order by time desc limit 1;', [bus_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },


}
