import { Injectable } from '@nestjs/common';
import { Shipping } from './entities/shipping.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateShippingDto } from './dto/create.shipping.dto';
import { UpdateShippingDto } from './dto/update.shipping.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShippingService {
    constructor(
        @InjectRepository(Shipping)
        private readonly shippingRepository: Repository<Shipping>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<Shipping[]> {
                const { limit, offset } = paginationQuery;
                return this.shippingRepository.find(
                    {
                        skip: offset,
                        take: limit
                    }
                );
            }
        
    async findOne(id:string): Promise<Shipping> {
        const shipping = await this.shippingRepository.findOneBy({id});
        if(!shipping){
            throw new Error(`Shipping with ID ${id} not found`);
        }

        return shipping;
    }

    create(shippingDto : CreateShippingDto): Promise<Shipping> {
        const shipping = this.shippingRepository.create(shippingDto);

        return this.shippingRepository.save(shipping);
    }

    async update(id: string, shippingDto: UpdateShippingDto) : Promise<Shipping> {
        const shipping = await this.shippingRepository.preload({
            id: id,
            ...shippingDto
        })
        if(!shipping){
            throw new Error(`Brand with ID ${id} not found`);
        }

        return this.shippingRepository.save(shipping);
    }

    async remove(id: string): Promise<Shipping> {
        const shipping = await this.findOne(id);
        return this.shippingRepository.remove(shipping);
    }
}
