const amqp = require("amqplib/callback_api");

const RABBITMQ_SERVER = "amqp://localhost:5672";
const QUEUE = "hello";

amqp.connect(RABBITMQ_SERVER, function(error, connection) {
  connection.createChannel(function(error, channel) {
    channel.assertQueue(QUEUE, { durable: false });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", QUEUE);

    channel.consume(
      QUEUE,
      function(message) {
        console.log(" [x] Received %s", message.content.toString());
      },
      { noAck: true }
    );
  });

  setTimeout(function() {
    connection.close();
    process.exit(0);
  }, 500);
});
