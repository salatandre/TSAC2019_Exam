var amqp = require('amqplib/callback_api');
const cfg = require('../config');
const router = require('express').Router();

router.post('/position', function (req, res) {

  console.log(req.body);
  var bus_id = req.body.bus_id
  var time = req.body.time;
  var lat = req.body.lat;
  var lon = req.body.long;


  amqp.connect('amqp://' + config.queue.user + ':' + config.queue.password + '@' + config.host.url + ':' + config.queue.port + '/', function (error0, connection) {
    if (error0) {
      throw error0;

    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }


      var queue = 'queue';
      var msg = {
        "bus_id": bus_id,
        "time": time,
        "lat": lat,
        "lon": lon
      }

      channel.assertQueue(queue, {
        durable: false
      });

      channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
      console.log(" [x] Sent %s", JSON.stringify(msg));

    });

  });

  res.end();

});





module.exports = router;
