import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductDTO } from './product.model.js';
import { Product } from './product.entity.js';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService,
        @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
    ) { }

    @Get()
    async all() {
        return await this.productService.all();
    }

    @Post()
    async create(@Body() product: ProductDTO): Promise<Product | null> {
        const productRes = await this.productService.create(product);
        this.client.emit('product_created', productRes);
        return productRes;
    }

    @Get(':id')
    async get(@Param('id') id: number): Promise<Product | null> {
        return await this.productService.get(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() product: ProductDTO): Promise<Product | null> {
        const productUpdated = await this.productService.update(id, product);
        this.client.emit('product_updated', productUpdated);
        return productUpdated;
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.productService.delete(id);
        this.client.emit('product_deleted', id);
    }

    @Post(':id/like')
    async likeProduct(@Param('id') id: number): Promise<Product | null> {
        const product = await this.productService.get(id);
        if (product) {
            return this.productService.update(id, { ...product, likes: product.likes + 1 });
        }
        return product;
    }
}
