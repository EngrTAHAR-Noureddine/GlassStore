import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Glass } from './entities/glass.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreateGlassDto } from './dto/create.glass.dto';
import { UpdateGlassDto } from './dto/update.glass.dto';

@Injectable()
export class GlassService {
    constructor(
        private readonly glassRepository: Repository<Glass>
    ){}

    findAll(paginationQuery : PaginationQueryDto): Promise<Glass[]> {
        const { limit, offset } = paginationQuery;
        return this.glassRepository.find(
            {
                skip: offset,
                take: limit
            }
        );
    }
            
    async findOne(id:string): Promise<Glass> {
        const glass = await this.glassRepository.findOneBy({id});
        if(!glass){
            throw new Error(`Glass with ID ${id} not found`);
        }

        return glass;
    }

    create(glassDto : CreateGlassDto): Promise<Glass> {
        const glass = this.glassRepository.create(glassDto);

        return this.glassRepository.save(glass);
    }

    async update(id: string, glassDto: UpdateGlassDto) : Promise<Glass> {
        const glass = await this.glassRepository.preload({
            id: id,
            ...glassDto
        })
        if(!glass){
            throw new Error(`Glass with ID ${id} not found`);
        }

        return this.glassRepository.save(glass);
    }

    async remove(id: string): Promise<Glass> {
        const glass = await this.findOne(id);
        return this.glassRepository.remove(glass);
    }
}
