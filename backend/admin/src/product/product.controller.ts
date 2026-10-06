import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductDTO } from './product.model.js';
import { Product } from './product.entity.js';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async all() {
        return await this.productService.all();
    }

    @Post()
    async create(@Body() product: ProductDTO) { 
        return await this.productService.create(product); 
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<Product | null> {
        return await this.productService.get(id);
    }
}
