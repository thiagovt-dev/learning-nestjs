/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('liv001', 'livro 1', 39.99),
    new Product('liv002', 'livro 2', 29.99),
    new Product('liv003', 'livro 3', 19.99),
  ];
  @Get()
  public getAllProducts(): Product[] {
    return this.products;
  }

  @Get(':id')
  public getProduct(@Param() params): Product {
    return this.products[0];
  }

  @Post('add-product')
  public createProduct(@Body() product: Product) {
    console.log(product);
    product.id = this.products.length + 1;
    return this.products.push(product);
  }

  @Put('update-product/:id')
  public updateProduct(@Param() params, @Body() product: Product): Product {
    return product;
  }

  @Delete('delete/:id')
  public deleteProduct(@Param() params): string {
    this.products.pop();
    return 'Product deleted';
  }
}
