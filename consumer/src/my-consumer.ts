import { Consumer, EachMessagePayload } from "kafkajs";
import ConsumerInterface from "./consumer-interface";
import { CONFIG } from "./config";

export default class MyConsumer implements ConsumerInterface {

  constructor(
    private readonly consumerName: string,
    private readonly consumer: Consumer
    ) {}

  async connect(): Promise<void> {
    this.consumer.connect().then(async () => {
      console.log(`Consumer ${this.consumerName} connected`)
      await this.consumer.subscribe({topic: CONFIG.kafka.groupId, fromBeginning: true})
      await this.consumer.run({eachMessage:  payload => this.handle(payload)})
    });
  }

  async disconnect(): Promise<void> {
    await this.consumer.disconnect();
    console.log(`Consumer ${this.consumerName} disconnected`)
  }

  async handle({ topic, partition, message }: EachMessagePayload): Promise<void> {
    console.log({
      value: message.value?.toString(),
      partition: partition,
      topic: topic
    }, this.consumerName)
  }

}