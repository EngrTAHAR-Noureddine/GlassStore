import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CreateAddressDto } from './dto/create.address.dto';
import { UpdateAddressDto } from './dto/update.address.dto';

@Controller('addresses')
export class AddressesController {

    constructor(
        private readonly addressesService: AddressesService,
    ){}

    @ApiResponse({status: 200, description: 'List of addresses retrieved successfully.'})
    @Get()
    getAll(@Query() paginationQuery : PaginationQueryDto) {
        return this.addressesService.findAll(paginationQuery);
    }

    @ApiResponse({status: 200, description: 'Address retrieved successfully.'})
    @Get(":id")
    getById(@Param('id') id: string) {
        const address = this.addressesService.findOne(id);
        return address;
    }

    @ApiResponse({status: 201, description: 'Address created successfully.'})
    @Post()
    async create(@Body() addressDto: CreateAddressDto, /* @Req() req */) {
        const address = await this.addressesService.create(addressDto);
        return address;
    }

    @ApiResponse({status: 201, description: 'Address updated successfully.'})
    @Put(":id")
    async update(@Body() addressDto: UpdateAddressDto, @Param('id') id: string) {
        const address = await this.addressesService.update(id, addressDto);
        return address;
    }

    @ApiResponse({status: 201, description: 'Address deleted successfully.'})
    @Delete(":id")
    async delete(@Param('id') id: string) {
        const address = await this.addressesService.remove(id);
        return address;
    }

}
