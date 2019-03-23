const amqp = require("amqplib/callback_api");

const RABBITMQ_SERVER = "amqp://localhost:5672";
const QUEUE = "hello";

amqp.connect(RABBITMQ_SERVER, function(error, connection) {
  connection.createChannel(function(error, channel) {
    channel.assertQueue(QUEUE, { durable: false });
    channel.sendToQueue(QUEUE, Buffer.from("Hello World!"));
    console.log(" [x] Sent 'Hello World!'");
  });

  setTimeout(function() {
    connection.close();
    process.exit(0);
  }, 500);
});
