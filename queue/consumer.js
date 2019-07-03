var amqp = require('amqplib/callback_api');
var queries = require('../db/index');
const config = require('../config')

amqp.connect('amqp://' + config.queue.user + ':' + config.queue.password + '@' + config.db.dynamicIp + ':' + config.queue.port + '/', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'queue';


    channel.assertQueue(queue, {
      durable: false
    });

    channel.consume(queue, function (data) {
      let d = JSON.parse(data.content.toString());
      console.log("Data : " + d);
      queries.insertPosition(d);

    }, {
      noAck: true
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function (msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {
      noAck: true
    });
  });

});


module.exports = amqp;
