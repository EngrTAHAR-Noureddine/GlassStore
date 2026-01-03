import { Injectable } from '@nestjs/common';
import { ProductVariant } from '../entities/product.variant.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { UpdateProductVariantDto } from '../dto/update.product.variant.dto';
import { CreateProductVariantDto } from '../dto/create.product.variant.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductVariantService {
    constructor(
        @InjectRepository(ProductVariant)
        private readonly productVariantRepository: Repository<ProductVariant>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<ProductVariant[]> {
        const { limit, offset } = paginationQuery;
        return this.productVariantRepository.find(
            {
                skip: offset,
                take: limit
            }
        );
    }
        
    async findOne(id:string): Promise<ProductVariant> {
        const productVariant = await this.productVariantRepository.findOneBy({id});
        if(!productVariant){
            throw new Error(`ProductVariant with ID ${id} not found`);
        }

        return productVariant;
    }

    create(ProductVariantDto : CreateProductVariantDto): Promise<ProductVariant> {
        const productVariant = this.productVariantRepository.create(ProductVariantDto);

        return this.productVariantRepository.save(productVariant);
    }

    async update(id: string, ProductVariantDto: UpdateProductVariantDto) : Promise<ProductVariant> {
        const productVariant = await this.productVariantRepository.preload({
            id: id,
            ...ProductVariantDto
        })
        if(!productVariant){
            throw new Error(`Product Variant with ID ${id} not found`);
        }

        return this.productVariantRepository.save(productVariant);
    }

    async remove(id: string): Promise<ProductVariant> {
        const productVariant = await this.findOne(id);
        return this.productVariantRepository.remove(productVariant);
    }
}
