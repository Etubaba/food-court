import { Injectable, Logger } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import configuration from '../../../../config';

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger(RabbitMQService.name);
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configuration().rabbitmq.url], // RabbitMQ connection URL
        queue: 'order_queue', // Queue to listen to
        queueOptions: { durable: true },
      },
    });
  }

  async startListening() {
    await this.client.connect();

    this.client.send({ cmd: 'subscribe' }, {}).subscribe(({ content }) => {
      const message = content.toString();
      this.logger.log(`Received message: ${message}`);
    });
  }
}
