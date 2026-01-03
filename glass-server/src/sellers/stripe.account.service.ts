import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StripeAccount } from './entities/stripe.account.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateStripeAccountDto } from './dto/create.stripe.account.dto';
import { UpdateStripeAccountDto } from './dto/update.stripe.account.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StripeAccountService {

    constructor(
        @InjectRepository(StripeAccount)
        private readonly stripeAccountRepository: Repository<StripeAccount>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<StripeAccount[]> {
                const { limit, offset } = paginationQuery;
                return this.stripeAccountRepository.find(
                    {
                        skip: offset,
                        take: limit
                    }
                );
            }
        
    async findOne(id:string): Promise<StripeAccount> {
        const stripeAccount = await this.stripeAccountRepository.findOneBy({id});
        if(!stripeAccount){
            throw new Error(`Stripe Account with ID ${id} not found`);
        }

        return stripeAccount;
    }

    create(stripeAccountDto : CreateStripeAccountDto): Promise<StripeAccount> {
        const stripeAccount = this.stripeAccountRepository.create(stripeAccountDto);

        return this.stripeAccountRepository.save(stripeAccount);
    }

    async update(id: string, stripeAccountDto: UpdateStripeAccountDto) : Promise<StripeAccount> {
        const stripeAccount = await this.stripeAccountRepository.preload({
            id: id,
            ...stripeAccountDto
        })
        if(!stripeAccount){
            throw new Error(`Stripe Account with ID ${id} not found`);
        }

        return this.stripeAccountRepository.save(stripeAccount);
    }

    async remove(id: string): Promise<StripeAccount> {
        const stripeAccount = await this.findOne(id);
        return this.stripeAccountRepository.remove(stripeAccount);
    }


}
