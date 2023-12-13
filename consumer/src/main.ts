import {EachMessagePayload} from 'kafkajs'
import { kafkaServer } from './kafka-config';
import { CONFIG } from './config';

const consumer1 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});

consumer1.connect()
.then(async ()=>{
  console.log('kafka consumer 1 connected')
  const consumer1_label = 'Consumer 1';
  await consumer1.subscribe({topic: CONFIG.kafka.groupId, fromBeginning: true})
  await consumer1.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
        partition: partition,
        topic: topic
      }, consumer1_label)
    },
  })
})


const consumer2 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});

consumer2.connect()
.then(async ()=>{
  console.log('kafka consumer 2 connected')
  const consumer2_label = 'Consumer 2';
  await consumer2.subscribe({topic: CONFIG.kafka.groupId, fromBeginning: true})
  await consumer2.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
        partition: partition,
        topic: topic
      },consumer2_label)
    },
  })
})


const consumer3 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});

consumer3.connect()
.then(async ()=>{
  console.log('kafka consumer 3 connected')
  const consumer3_label = 'Consumer 3';
  await consumer3.subscribe({topic: CONFIG.kafka.groupId, fromBeginning: true})
  await consumer3.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
        partition: partition,
        topic: topic
      }, consumer3_label)
    },
  })
})


const consumer4 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});

consumer4.connect()
.then(async ()=>{
  console.log('kafka consumer 4 connected')
  const consumer4_label = 'Consumer 4';
  await consumer4.subscribe({topic: CONFIG.kafka.groupId, fromBeginning: true})
  await consumer4.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
        partition: partition,
        topic: topic
      },consumer4_label)
    },
  })
})


const consumer5 = kafkaServer.consumer({ groupId: CONFIG.kafka.groupId});

consumer5.connect()
.then(async ()=>{
  console.log('kafka consumer 5 connected')
  const consumer5_label = 'Consumer 5';
  await consumer5.subscribe({topic: CONFIG.kafka.groupId, fromBeginning: true})
  await consumer5.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log({
        value: message.value?.toString(),
        partition: partition,
        topic: topic
      }, consumer5_label)
    },
  })
})


