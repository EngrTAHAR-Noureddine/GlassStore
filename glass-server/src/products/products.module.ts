import { Module } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { BrandService } from './brand.service';
import { GlassService } from './glass.service';
import { ProductVariantService } from './product.variant.service';

@Module({
  providers: [ProductsService, BrandService, GlassService, ProductVariantService]
})
export class ProductsModule {}
