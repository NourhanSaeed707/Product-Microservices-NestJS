import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { EventPattern } from '@nestjs/microservices';
import { Product } from './product.model.js';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    async all(): Promise<Product[] | null> {
        return this.productService.all();
    }

    @EventPattern('product_created')
    async handleProductCreated(data: any) {
        this.productService.create(data);
    }

    @EventPattern('product_updated')
    async handleProductUpdated(product: any) {
        this.productService.update(product.id, product);
    }

    @EventPattern('product_deleted')
    async handleProductDeleted(id: number) {
        this.productService.delete(id);
    }

}

