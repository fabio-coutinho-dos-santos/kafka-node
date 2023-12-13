import 'dotenv/config'

export const CONFIG = {
  kafka: {
    brokerHost: process.env.KAFKA_BROKER_HOST || 'http://localhost:9092',
    username: process.env.KAFKA_USERNAME || 'username',
    password: process.env.KAFKA_PASSWORD || 'password',
    clientId: process.env.KAFKA_CLIENT_ID || 'client_id',
    topic: process.env.KAFKA_TOPIC || 'topic',
    mechanism: process.env.KAFKA_MECHANISM || 'machanism',
    groupId: process.env.KAFKA_GROUP_ID || 'groupId',
  }
}