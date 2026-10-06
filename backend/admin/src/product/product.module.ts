import { Module } from '@nestjs/common';
import { ProductController } from './product.controller.js';
import { ProductService } from './product.service.js';
import { Product } from './product.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        ClientsModule.register([
            {
                name: 'PRODUCT_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqps://zkqnpgqd:j61ZrakMoR9oov195YDgLBfJGcJ7Z5iA@fuji.lmq.cloudamqp.com/zkqnpgqd'],
                    queue: 'main_queue',
                    queueOptions: {
                        durable: false,
                    },
                },
            },
        ]),
    ],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule { }
