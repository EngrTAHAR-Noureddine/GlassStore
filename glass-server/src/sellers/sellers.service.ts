import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Seller } from './entities/seller.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateSellerDto } from './dto/create.seller.dto';
import { UpdateSellerDto } from './dto/update.seller.dto';

@Injectable()
export class SellersService {

    constructor(
        private readonly sellerRepository: Repository<Seller>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<Seller[]> {
                const { limit, offset } = paginationQuery;
                return this.sellerRepository.find(
                    {
                        skip: offset,
                        take: limit
                    }
                );
            }
        
    async findOne(id:string): Promise<Seller> {
        const seller = await this.sellerRepository.findOneBy({id});
        if(!seller){
            throw new Error(`Seller with ID ${id} not found`);
        }

        return seller;
    }

    create(sellerDto : CreateSellerDto): Promise<Seller> {
        const seller = this.sellerRepository.create(sellerDto);

        return this.sellerRepository.save(seller);
    }

    async update(id: string, sellerDto: UpdateSellerDto) : Promise<Seller> {
        const seller = await this.sellerRepository.preload({
            id: id,
            ...sellerDto
        })
        if(!seller){
            throw new Error(`Seller with ID ${id} not found`);
        }

        return this.sellerRepository.save(seller);
    }

    async remove(id: string): Promise<Seller> {
        const seller = await this.findOne(id);
        return this.sellerRepository.remove(seller);
    }

}
