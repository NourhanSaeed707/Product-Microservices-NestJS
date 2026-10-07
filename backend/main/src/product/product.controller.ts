import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { EventPattern } from '@nestjs/microservices';
import { Product } from './product.model.js';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService,
        private readonly httpService: HttpService
    ) { }

    @Get()
    async all(): Promise<Product[] | null> {
        return this.productService.all();
    }

    @Post(':id/like')
    async likeProduct(@Param('id', ParseIntPipe) id: number): Promise<Product | null> {
        const product = await this.productService.findOne(id);
        this.httpService.post(`http://localhost:8001/api/products/${id}/like`, {});
        if (product) {
            return this.productService.update(id, {
                likes: product.likes + 1
            });
        }
        return product;
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
