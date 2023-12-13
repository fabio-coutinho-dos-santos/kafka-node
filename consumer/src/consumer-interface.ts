export default interface ConsumerInterface {
  connect(): Promise<void>,
  disconnect(): Promise<void>,
  handle(message: any): Promise<void>
}