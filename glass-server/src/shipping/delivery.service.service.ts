import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DeliveryService } from './entities/delivery.service.entity';
import { CreateDeliveryServiceDto } from './dto/create.delivery.service.dto';
import { UpdateDeliveryServiceDto } from './dto/update.delivery.service.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class DeliveryServiceService {

    constructor(
        private readonly  deliveryServiceRepository: Repository<DeliveryService>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<DeliveryService[]> {
                const { limit, offset } = paginationQuery;
                return this.deliveryServiceRepository.find(
                    {
                        skip: offset,
                        take: limit
                    }
                );
            }
        
    async findOne(id:string): Promise<DeliveryService> {
        const deliveryService = await this.deliveryServiceRepository.findOneBy({id});
        if(!deliveryService){
            throw new Error(`Delivery Service with ID ${id} not found`);
        }

        return deliveryService;
    }

    create(deliveryServiceDto : CreateDeliveryServiceDto): Promise<DeliveryService> {
        const deliveryService = this.deliveryServiceRepository.create(deliveryServiceDto);

        return this.deliveryServiceRepository.save(deliveryService);
    }

    async update(id: string, deliveryServiceDto: UpdateDeliveryServiceDto) : Promise<DeliveryService> {
        const deliveryService = await this.deliveryServiceRepository.preload({
            id: id,
            ...deliveryServiceDto
        })
        if(!deliveryService){
            throw new Error(`Delivery Service with ID ${id} not found`);
        }

        return this.deliveryServiceRepository.save(deliveryService);
    }

    async remove(id: string): Promise<DeliveryService> {
        const deliveryService = await this.findOne(id);
        return this.deliveryServiceRepository.remove(deliveryService);
    }

}
