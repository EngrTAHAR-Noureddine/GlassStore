import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreatePaymentDto } from './dto/create.payment.dto';
import { UpdatePaymentDto } from './dto/update.payment.dto';

@Controller('payments')
@ApiBearerAuth('JWT-auth')
export class PaymentsController {

    constructor(
        private readonly paymentsService: PaymentsService,
    ){}


    @ApiResponse({status: 200, description: 'List of payments retrieved successfully.'})
    @Get()
    getAll(@Query() paginationQuery : PaginationQueryDto) {
        return this.paymentsService.findAll(paginationQuery);
    }

    @ApiResponse({status: 200, description: 'Order retrieved successfully.'})
    @Get(":id")
    getById(@Param('id') id: string) {
        const payment = this.paymentsService.findOne(id);
        return payment;
    }

    @ApiResponse({status: 201, description: 'Payment created successfully.'})
    @Post()
    async create(@Body() paymentDto: CreatePaymentDto, /* @Req() req */) {
        const payment = await this.paymentsService.create(paymentDto);
        return payment;
    }

    @ApiResponse({status: 201, description: 'Payment updated successfully.'})
    @Put(":id")
    async update(@Body() paymentDto: UpdatePaymentDto, @Param('id') id: string) {
        const payment = await this.paymentsService.update(id, paymentDto);
        return payment;
    }

    @ApiResponse({status: 201, description: 'Payment deleted successfully.'})
    @Delete(":id")
    async delete(@Param('id') id: string) {
        const payment = await this.paymentsService.remove(id);
        return payment;
    }


}
