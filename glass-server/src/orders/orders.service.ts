import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateOrderDto } from './dto/create.order.dto';
import { UpdateOrderDto } from './dto/update.order.dto';

@Injectable()
export class OrdersService {

    constructor(
        private readonly ordersRepository: Repository<Order>,
    ) { }

    findAll(paginationQuery : PaginationQueryDto): Promise<Order[]> {
        const { limit, offset } = paginationQuery;
        return this.ordersRepository.find(
            {
                skip: offset,
                take: limit
            }
        );
    }

    async findOne(id:string): Promise<Order> {
        const order = await this.ordersRepository.findOneBy({id});
        if(!order){
            throw new Error(`Order with ID ${id} not found`);
        }

        return order;
    }

    create(orderDto : CreateOrderDto): Promise<Order> {
        const order = this.ordersRepository.create(orderDto);

        return this.ordersRepository.save(order);
    }

    async update(id: string, orderDto: UpdateOrderDto) : Promise<Order> {
        const order = await this.ordersRepository.preload({
            id: id,
            ...orderDto
        })
        if(!order){
            throw new Error(`Order with ID ${id} not found`);
        }

        return this.ordersRepository.save(order);
    }

    async remove(id: string): Promise<Order> {
        const order = await this.findOne(id);
        return this.ordersRepository.remove(order);
    }
}
