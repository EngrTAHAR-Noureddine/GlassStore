import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiResponse } from '@nestjs/swagger';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateOrderDto } from './dto/create.order.dto';
import { UpdateOrderDto } from './dto/update.order.dto';

@Controller('orders')
export class OrdersController {

    constructor(
        private readonly ordersService: OrdersService,
        private readonly orderItemsService: OrdersService,
    ){}


    @ApiResponse({status: 200, description: 'List of orders retrieved successfully.'})
    @Get()
    getAll(@Query() paginationQuery : PaginationQueryDto) {
        return this.ordersService.findAll(paginationQuery);
    }

    @ApiResponse({status: 200, description: 'Order retrieved successfully.'})
    @Get(":id")
    getById(@Param('id', ParseIntPipe) id: string) {
        const order = this.ordersService.findOne(id);
        return order;
    }

    @ApiResponse({status: 201, description: 'Order created successfully.'})
    @Post()
    async create(@Body() orderDto: CreateOrderDto, /* @Req() req */) {
        const order = await this.ordersService.create(orderDto);
        return order;
    }

    @ApiResponse({status: 201, description: 'Order updated successfully.'})
    @Put(":id")
    async update(@Body() orderDto: UpdateOrderDto, @Param('id', ParseIntPipe) id: string) {
        const order = await this.ordersService.update(id, orderDto);
        return order;
    }

    @ApiResponse({status: 201, description: 'Order deleted successfully.'})
    @Delete(":id")
    async delete(@Param('id', ParseIntPipe) id: string) {
        const order = await this.ordersService.remove(id);
        return order;
    }


}
