import {Kafka, KafkaConfig} from 'kafkajs'
import { CONFIG } from './config';

const kafkaConfig: KafkaConfig = {
  brokers: [CONFIG.kafka.brokerHost],
  clientId: CONFIG.kafka.clientId,
  ssl: true,
  sasl: {
    mechanism: 'scram-sha-512',
    username: CONFIG.kafka.username,
    password: CONFIG.kafka.password
  },
  logLevel: 0
}

export const kafkaServer = new Kafka(kafkaConfig);