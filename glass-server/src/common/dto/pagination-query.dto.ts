import { IsOptional, IsPositive, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsPositive()
    @Type(() => Number) 
    limit: number = 10; 
    
    @IsOptional()
    @Min(0) 
    @Type(() => Number)
    offset: number = 0; 
}
