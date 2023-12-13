import { kafkaServer } from './kafka-config';
import { CONFIG } from './config';

const producer = kafkaServer.producer();
let counter = 1;

producer.connect()
.then(async () => {
  console.log('Kafka producer connected')
  setInterval(async () => {
    await producer.send({
      topic: CONFIG.kafka.topic,
      messages: [
        { value: `Message ${counter}`}
      ]
    })
    counter ++;
    console.log(`Message ${counter} Sent`)
  }, 5000)
})
