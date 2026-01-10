import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update.user.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('users')
@ApiBearerAuth('JWT-auth')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ){}

    @ApiResponse({status: 200, description: 'List of users retrieved successfully.'})
    @Get()
    getAll(@Query() paginationQuery : PaginationQueryDto) {
        return this.usersService.findAll(paginationQuery);
    }

    @ApiResponse({status: 200, description: 'User retrieved successfully.'})
    @Get(":id")
    getById(@Param('id') id: string) {
        const user = this.usersService.findOne(id);
        return user;
    }

    @ApiResponse({status: 201, description: 'User created successfully.'})
    @Post()
    async create(@Body() userDto: CreateUserDto, /* @Req() req */) {
        const user = await this.usersService.create(userDto);
        return user;
    }

    @ApiResponse({status: 201, description: 'User updated successfully.'})
    @Put(":id")
    async update(@Body() userDto: UpdateUserDto, @Param('id') id: string) {
        const user = await this.usersService.update(id, userDto);
        return user;
    }

    @ApiResponse({status: 201, description: 'User deleted successfully.'})
    @Delete(":id")
    async delete(@Param('id') id: string) {
        const user = await this.usersService.remove(id);
        return user;
    }
}
