import { Module } from '@nestjs/common';

import { ProductController } from './product.controller.js';
import { ProductService } from './product.service.js';

import { Product, ProductSchema } from './product.model.js';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // MongoDB model
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),

    // RabbitMQ client
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],

  controllers: [ProductController],

  providers: [ProductService],
})
export class ProductModule {}