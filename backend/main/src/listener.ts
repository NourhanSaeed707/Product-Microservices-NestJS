import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://zkqnpgqd:j61ZrakMoR9oov195YDgLBfJGcJ7Z5iA@fuji.lmq.cloudamqp.com/zkqnpgqd'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });

    await app.listen();
    console.log('Microservice is listening');
}
await bootstrap();
