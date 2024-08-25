import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  public getAllProducts(): string {
    return 'List all products';
  }

  @Get(':id')
  public getProduct(@Param() params): string {
    return 'Get a product with id: ' + params.id;
  }

  @Post('add-product')
  public createProduct(@Body() product): string {
    console.log(product);
    return 'Create a product: ' + JSON.stringify(product);
  }

  @Put('update-product/:id')
  public updateProduct(@Param() params, @Body() product): string {
    console.log(params.id);
    console.log(product);
    return (
      'Update a product with id: ' +
      params.id +
      ' with data: ' +
      JSON.stringify(product)
    );
  }

  @Delete('delete/:id')
  public deleteProduct(@Param() params): string {
    return 'Delete a product with id: ' + params.id;
  }
}
