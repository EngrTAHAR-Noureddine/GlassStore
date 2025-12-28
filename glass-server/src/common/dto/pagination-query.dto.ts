import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    // @Type(() => Number) // to convert the query string to a number 
    // we don't need it if we enable enableImplicitConversion in main.ts
    @IsPositive()
    limit: number;
    @IsOptional()
    // @Type(() => Number) // to convert the query string to a number 
    // we don't need it if we enable enableImplicitConversion in main.ts
    @IsPositive()
    offset: number;
}
