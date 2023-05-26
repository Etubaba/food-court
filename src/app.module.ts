import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from '../config';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { CalculatedModule } from './modules/calculated_order/calculated_order.module';
import { OrderModule } from './modules/order/order.module';
import { OrderController } from './modules/order/controllers/order.controller';
import { OrderTypesModule } from './modules/order_types/order_types.module';
import { RabbitMQService } from './modules/rabbitMQ/service/rabbitmq.service';
import { OrderService } from './modules/order/services/order.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    CalculatedModule,
    HealthModule,
    OrderModule,
    OrderTypesModule,
  ],
  controllers: [AppController, OrderController],
  providers: [AppService, RabbitMQService, OrderService],
})
export class AppModule {}
