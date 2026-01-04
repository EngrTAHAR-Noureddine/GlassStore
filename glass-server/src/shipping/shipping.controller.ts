import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateShippingDto } from './dto/update.shipping.dto';
import { CreateShippingDto } from './dto/create.shipping.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { ShippingService } from './shipping.service';

@Controller('shipping')
export class ShippingController {

    constructor(
        private readonly shippingService: ShippingService,
    ){}

    @ApiResponse({status: 200, description: 'List of Shipping retrieved successfully.'})
    @Get()
    getAll(@Query() paginationQuery : PaginationQueryDto) {
        return this.shippingService.findAll(paginationQuery);
    }

    @ApiResponse({status: 200, description: 'Shipping retrieved successfully.'})
    @Get(":id")
    getById(@Param('id') id: string) {
        const shipping = this.shippingService.findOne(id);
        return shipping;
    }

    @ApiResponse({status: 201, description: 'Shipping created successfully.'})
    @Post()
    async create(@Body() addressDto: CreateShippingDto, /* @Req() req */) {
        const shipping = await this.shippingService.create(addressDto);
        return shipping;
    }

    @ApiResponse({status: 201, description: 'Shipping updated successfully.'})
    @Put(":id")
    async update(@Body() addressDto: UpdateShippingDto, @Param('id') id: string) {
        const shipping = await this.shippingService.update(id, addressDto);
        return shipping;
    }

    @ApiResponse({status: 201, description: 'Shipping deleted successfully.'})
    @Delete(":id")
    async delete(@Param('id') id: string) {
        const shipping = await this.shippingService.remove(id);
        return shipping;
    }


}
