import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { ApiResponse } from '@nestjs/swagger';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateSellerDto } from './dto/create.seller.dto';
import { UpdateSellerDto } from './dto/update.seller.dto';
import { UsersService } from '../users/users.service';

@Controller('sellers')
export class SellersController {

    constructor(
        private readonly sellersService: SellersService,
        // private readonly userService: UsersService,
    ) {}

    @ApiResponse({status: 200, description: 'List of sellers retrieved successfully.'})
    @Get()
    getAll(@Query() paginationQuery : PaginationQueryDto) {
        return this.sellersService.findAll(paginationQuery);
    }

    @ApiResponse({status: 200, description: 'Seller retrieved successfully.'})
    @Get(":id")
    getById(@Param('id') id: string) {
        const seller = this.sellersService.findOne(id);
        return seller;
    }

    @ApiResponse({status: 201, description: 'Seller created successfully.'})
    @Post()
    async create(@Body() sellerDto: CreateSellerDto, /* @Req() req */) {
        const seller = await this.sellersService.create(sellerDto);
        return seller;
    }

    @ApiResponse({status: 201, description: 'Seller updated successfully.'})
    @Put(":id")
    async update(@Body() sellerDto: UpdateSellerDto, @Param('id') id: string) {
        const seller = await this.sellersService.update(id, sellerDto);
        return seller;
    }

    @ApiResponse({status: 201, description: 'Seller deleted successfully.'})
    @Delete(":id")
    async delete(@Param('id') id: string) {
        const seller = await this.sellersService.remove(id);
        return seller;
    }

}
