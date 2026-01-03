import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateBrandDto {

  @ApiProperty({
    description: 'The name of the brand',
    example: 'Ray-Ban',
    default: 'Generic Brand'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The description of the brand',
    example: 'High-quality eyewear brand',
    default: 'No description available'
  })
  @IsString()
  @IsOptional()
  description?: string;
}