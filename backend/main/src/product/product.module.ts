import { Module } from '@nestjs/common';
import { ProductController } from './product.controller.js';
import { ProductService } from './product.service.js';
import { Product, ProductSchema } from './product.model.js';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
