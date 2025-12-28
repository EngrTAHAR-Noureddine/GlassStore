import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateAddressDto } from './dto/create.address.dto';
import { UpdateAddressDto } from './dto/update.address.dto';

@Injectable()
export class AddressesService {

    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,
    ){}
    

    findAll(paginationQuery : PaginationQueryDto): Promise<Address[]> {
        const { limit, offset } = paginationQuery;
        return this.addressRepository.find(
            {
                skip: offset,
                take: limit
            }
        );
    }

    async findOne(id: string): Promise<Address> {
        const address = await this.addressRepository.findOneBy({id});
        if(!address){
            throw new Error(`Address with ID ${id} not found`);
        }
        return address;
    }

    create(addressDto : CreateAddressDto): Promise<Address> {
        const address = this.addressRepository.create(addressDto);
        return this.addressRepository.save(address);
    }

    async remove(id: string): Promise<void> {
        const address = await this.findOne(id);
        await this.addressRepository.remove(address);
    }

    async update(id: string, addressDto: UpdateAddressDto): Promise<Address> {
        const address = await this.addressRepository.preload({
            id: id,
            ...addressDto
        });
        if(!address){
            throw new Error(`Address with ID ${id} not found`);
        }
        return this.addressRepository.save(address);
    }

}
