import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity.js';
import { ProductDTO } from './product.model.js';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) { }

    async all(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async create(product: ProductDTO): Promise<Product> {
        return this.productRepository.save(product);
    }

    async get(id: number): Promise<Product | null> {
        return this.productRepository.findOneBy({ id });
    }

    async update(id: number, product: ProductDTO): Promise<Product | null> {
        const existingProduct = await this.productRepository.findOneBy({ id });
        if (!existingProduct) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        Object.assign(existingProduct, product);
        return await this.productRepository.save(existingProduct);
    }
}
