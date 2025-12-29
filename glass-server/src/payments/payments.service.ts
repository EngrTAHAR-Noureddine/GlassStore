import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreatePaymentDto } from './dto/create.payment.dto';
import { UpdatePaymentDto } from './dto/update.payment.dto';

@Injectable()
export class PaymentsService {

    constructor(
        private readonly paymentRepository: Repository<Payment>
    ) {}

    findAll(paginationQuery : PaginationQueryDto): Promise<Payment[]> {
            const { limit, offset } = paginationQuery;
            return this.paymentRepository.find(
                {
                    skip: offset,
                    take: limit
                }
            );
        }
    
    async findOne(id:string): Promise<Payment> {
        const payment = await this.paymentRepository.findOneBy({id});
        if(!payment){
            throw new Error(`Payment with ID ${id} not found`);
        }

        return payment;
    }

    create(paymentDto : CreatePaymentDto): Promise<Payment> {
        const payment = this.paymentRepository.create(paymentDto);

        return this.paymentRepository.save(payment);
    }

    async update(id: string, paymentDto: UpdatePaymentDto) : Promise<Payment> {
        const payment = await this.paymentRepository.preload({
            id: id,
            ...paymentDto
        })
        if(!payment){
            throw new Error(`Payment with ID ${id} not found`);
        }

        return this.paymentRepository.save(payment);
    }

    async remove(id: string): Promise<Payment> {
        const payment = await this.findOne(id);
        return this.paymentRepository.remove(payment);
    }

}
