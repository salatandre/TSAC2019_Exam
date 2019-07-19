var amqp = require('amqplib/callback_api');
const config = require('../config');
const router = require('express').Router();

router.post('/power', function (req, res) {

  console.log(req.body);
  var belt_id = req.body.belt_id
  var time = req.body.time;
  var consume = req.body.consume;
  var vel = req.body.vel;


  amqp.connect('amqp://' + config.queue.user + ':' + config.queue.password + '@' + config.db.dynamicIp + ':' + config.queue.port + '/', function (error0, connection) {
    if (error0) {
      throw error0;
    }
    console.log(error0, connection)
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }


      var queue = 'queue';
      var msg = {
        "belt_id": belt_id,
        "time": time,
        "consume": consume,
        "vel": vel

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