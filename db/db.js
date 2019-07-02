const {
  Client
} = require('pg')

const config = require('../config')

const client = new Client({
  user: config.db.user,
  host: config.db.dynamicIp,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port
})
client.connect()

module.exports = client;
