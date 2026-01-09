import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Glass } from '../entities/glass.entity';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { CreateGlassDto } from '../dto/create.glass.dto';
import { UpdateGlassDto } from '../dto/update.glass.dto';
import { Seller } from '../../sellers/entities/seller.entity';
import { Brand } from '../entities/brand.entity';
import { User } from '../../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GlassService {
    constructor(
        @InjectRepository(Glass)
        private readonly glassRepository: Repository<Glass>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<Glass[]> {
        const { limit, offset } = paginationQuery;
        return this.glassRepository.find(
            {
                skip: offset,
                take: limit
            }
        );
    }
    
    async findBySeller(sellerId: string): Promise<Glass[]> {
        const glasses = await this.glassRepository.find({
            where: { sellerId },
            // relations: ['brand'], 
            order: { name: 'ASC' }
        });
        if (!glasses || glasses.length === 0) {
            return [];
        }
        return glasses;
    }

    async findOne(id:string): Promise<Glass> {
        const glass = await this.glassRepository.findOneBy({id});
        if(!glass){
            throw new Error(`Glass with ID ${id} not found`);
        }

        return glass;
    }

    create(glassDto : CreateGlassDto, brand:Brand, seller: Seller): Promise<Glass> {
        const glass = this.glassRepository.create({
            ...glassDto,
            seller: seller,
            sellerId: seller.id,
            brandId: brand.id,
            brand:brand
        });

        return this.glassRepository.save(glass);
    }

    async update(id: string, glassDto: UpdateGlassDto, brand:Brand, seller: Seller) : Promise<Glass> {
        const glass = await this.glassRepository.preload({
            id: id,
            ...glassDto,
            brand:brand,
            seller:seller
        })
        if(!glass){
            throw new Error(`Glass with ID ${id} not found`);
        }

        return this.glassRepository.save(glass);
    }

    async remove(id: string): Promise<Glass> {
        const glass = await this.findOne(id);
        return this.glassRepository.remove(glass);
    }
}
