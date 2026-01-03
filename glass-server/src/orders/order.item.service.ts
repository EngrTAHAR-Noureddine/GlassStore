import { Injectable } from '@nestjs/common';
import { OrderItem } from './entities/order.item.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateOrderItemDto } from './dto/create.order.item.dto';
import { UpdateOrderDto } from './dto/update.order.dto';
import { UpdateOrderItemDto } from './dto/update.order.item.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderItemService {

    constructor(
        @InjectRepository(OrderItem)
        private readonly orderItemRepository: Repository<OrderItem>,
    ) { }

    findAll(paginationQuery: PaginationQueryDto): Promise<OrderItem[]> {
        const { limit, offset } = paginationQuery;
        return this.orderItemRepository.find(
            {
                skip: offset,
                take: limit
            }
        );
    }

    async findOne(id: string): Promise<OrderItem> {
        const orderItem = await this.orderItemRepository.findOneBy({id});
        if(!orderItem){
            throw new Error(`Order Item with ID ${id} not found`);
        }   
        return orderItem;
    }

    create(orderItemDto : CreateOrderItemDto): Promise<OrderItem> {
        const orderItem = this.orderItemRepository.create(orderItemDto);

        return this.orderItemRepository.save(orderItem);
    }

    async update(id: string, orderItemDto: UpdateOrderItemDto) : Promise<OrderItem> {
        const orderItem = await this.orderItemRepository.preload({
            id: id,
            ...orderItemDto
        })
        if(!orderItem){
            throw new Error(`Order Item with ID ${id} not found`);
        }

        return this.orderItemRepository.save(orderItem);
    }

    async remove(id: string) : Promise<OrderItem> {
        const orderItem = await this.findOne(id);
        return this.orderItemRepository.remove(orderItem);
    }

}
