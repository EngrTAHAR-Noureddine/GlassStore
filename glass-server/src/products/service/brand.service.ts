import { Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { CreateBrandDto } from '../dto/create.brand.dto';
import { UpdateBrandDto } from '../dto/update.brand.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>
    ){}

    async findAll(paginationQuery: PaginationQueryDto): Promise<Brand[]> {
        const { limit, offset, search } = paginationQuery;

        return await this.brandRepository.find({
            where: search ? { name: ILike(`${search}%`) } : {}, 
            skip: offset,
            take: limit,
            order: { name: 'ASC' }
        });
    }
        
    async findOne(id:string): Promise<Brand> {
        const brand = await this.brandRepository.findOneBy({id});
        if(!brand){
            throw new Error(`Brand with ID ${id} not found`);
        }

        return brand;
    }

    async findByName(name: string): Promise<Brand | null> {
        return await this.brandRepository.findOne({ where: { name } });
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
