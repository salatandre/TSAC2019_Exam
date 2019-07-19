const db = require('./db')

module.exports = {

  insertData(data) {


    db.query('INSERT INTO public.power (belt_id, consume, time) values($1,$2,$3)',
      [
        data["belt_id"], data["consume"], data["time"]
      ],
      (error) => {
        if (error) throw error;
      });

    db.query('INSERT INTO public.rate (belt_id, vel, time) values ($1,$2,$3)',
      [
        data["belt_id"], data["vel"], data["time"]
      ],
      (error) => {
        if (error) throw error;
      })
  },

  getAllBelts(callback) {
    db.query('SELECT * FROM public.belt')
      .then(res => callback(null, res.rows))
      .catch(err => callback(err, null))
  },

  getSingleBelt(belt_id, callback) {
    db.query('SELECT * FROM public.belt WHERE id= $1;', [belt_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },


  getLastBeltPower(belt_id, callback) {
    db.query('SELECT * FROM public.power WHERE belt_id = $1 order by time desc limit 1;', [belt_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },

  getPowers(callback) {
    db.query('SELECT * FROM public.power;')
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },
  getBeltPower(belt_id, callback) {
    db.query('SELECT * FROM public.power WHERE belt_id = $1;', [belt_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },

  getRates(callback) {
    db.query('SELECT * FROM public.rate;')
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },
  getBeltRates(belt_id, callback) {
    db.query('SELECT * FROM public.rate WHERE belt_id= $1;', [belt_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  },
  getLastBeltRates(belt_id, callback) {
    db.query('SELECT * FROM public.rate WHERE belt_id = $1 order by "time" desc limit 1;', [belt_id])
      .then(result => callback(null, result.rows))
      .catch(err => callback(err, null))
  }

}