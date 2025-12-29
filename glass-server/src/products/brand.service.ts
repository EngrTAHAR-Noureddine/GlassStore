import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateBrandDto } from './dto/create.brand.dto';
import { UpdateBrandDto } from './dto/update.brand.dto';

@Injectable()
export class BrandService {
    constructor(
        private readonly brandRepository: Repository<Brand>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<Brand[]> {
                const { limit, offset } = paginationQuery;
                return this.brandRepository.find(
                    {
                        skip: offset,
                        take: limit
                    }
                );
            }
        
    async findOne(id:string): Promise<Brand> {
        const brand = await this.brandRepository.findOneBy({id});
        if(!brand){
            throw new Error(`Brand with ID ${id} not found`);
        }

        return brand;
    }

    create(brandDto : CreateBrandDto): Promise<Brand> {
        const brand = this.brandRepository.create(brandDto);

        return this.brandRepository.save(brand);
    }

    async update(id: string, brandDto: UpdateBrandDto) : Promise<Brand> {
        const brand = await this.brandRepository.preload({
            id: id,
            ...brandDto
        })
        if(!brand){
            throw new Error(`Brand with ID ${id} not found`);
        }

        return this.brandRepository.save(brand);
    }

    async remove(id: string): Promise<Brand> {
        const brand = await this.findOne(id);
        return this.brandRepository.remove(brand);
    }
}
