import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model.js';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
    ) { }

    async all(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async create(product: Product): Promise<Product | null> {
        return this.productModel.create(product);
    }
}
