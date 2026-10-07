import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductDTO } from './product.model.js';
import { Product } from './product.entity.js';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService, 
        @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
    ) {}

    @Get()
    async all() {
        this.client.emit('product_created', 'Product created event emitted');
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

    @Put(':id')
    async update(@Param('id') id: number, @Body() product: ProductDTO): Promise<Product | null> {
        return await this.productService.update(id, product);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return await this.productService.delete(id);
    }
}
