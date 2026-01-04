import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { console } from 'inspector';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<User[]> {
        const { limit, offset } = paginationQuery;
        return this.usersRepository.find(
            {
                skip: offset,
                take: limit
            }
        );
    }
        
    async findOne(id:string): Promise<User> {
        const user = await this.usersRepository.findOneBy({id});
        console.log(user);
        if(!user){
            throw new Error(`User with ID ${id} not found`);
        }

        return user;
    }

    create(userDto : CreateUserDto): Promise<User> {
        const user = this.usersRepository.create(userDto);

        return this.usersRepository.save(user);
    }

    async update(id: string, userDto: UpdateUserDto) : Promise<User> {
        const user = await this.usersRepository.preload({
            id: id,
            ...userDto
        })
        if(!user){
            throw new Error(`User with ID ${id} not found`);
        }

        return this.usersRepository.save(user);
    }

    async remove(id: string): Promise<User> {
        const user = await this.findOne(id);
        return this.usersRepository.remove(user);
    }
}
