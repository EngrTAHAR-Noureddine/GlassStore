import { Module } from '@nestjs/common';
import { BrandService } from './service/brand.service';
import { GlassService } from './service/glass.service';
import { ProductVariantService } from './service/product.variant.service';
import { ProductsController } from './controller/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Glass } from './entities/glass.entity';
import { ProductVariant } from './entities/product.variant.entity';
import { SellersModule } from '../sellers/sellers.module';

@Module({
  imports:[
      TypeOrmModule.forFeature([
              Brand,
              Glass,
              ProductVariant
      ]),
      SellersModule,
    ],
  providers: [BrandService, GlassService, ProductVariantService],
  controllers: [ProductsController],
})
export class ProductsModule {}
