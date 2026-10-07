import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    async all() {
        return this.productService.all();
    }

    @EventPattern('product_created')
    async handleProductCreated(data: any) {
        console.log('Product created event received:', data);
        // Handle the product created event, e.g., update the database or perform other actions
    }
}
