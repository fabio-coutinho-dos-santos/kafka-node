import { kafkaServer } from './kafka-config';
import { CONFIG } from './config';
import MyConsumer from './my-consumer';

const kafkaConsumer1 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});
const myConsumer1 = new MyConsumer('MyConsumer-1', kafkaConsumer1)
myConsumer1.connect()

const kafkaConsumer2 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});
const myConsumer2 = new MyConsumer('MyConsumer-2', kafkaConsumer2)
myConsumer2.connect()

const kafkaConsumer3 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});
const myConsumer3 = new MyConsumer('MyConsumer-3', kafkaConsumer3)
myConsumer3.connect()

const kafkaConsumer4 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});
const myConsumer4 = new MyConsumer('MyConsumer-4', kafkaConsumer4)
myConsumer4.connect()

const kafkaConsumer5 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});
const myConsumer5 = new MyConsumer('MyConsumer-5', kafkaConsumer5)
myConsumer5.connect()
