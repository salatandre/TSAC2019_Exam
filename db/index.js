const db = require('./db')

module.exports = {

  getAllBuses(callback) {
    db.query('SELECT * FROM public.buses')
      .then(res => callback(null, res.rows))
      .catch(err => callback(err, null))
  }


}
