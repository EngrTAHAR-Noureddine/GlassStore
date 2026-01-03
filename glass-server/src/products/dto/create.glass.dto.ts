import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsUUID, IsOptional, Min } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateGlassDto {
  @ApiProperty({
    description: 'The ID of the brand associated with the glass',
    example: 'b1a7f5e2-3c4d-4e5f-8a9b-0c1d2e3f4a5b',
    default: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d'
  })
  @IsUUID()
  @IsNotEmpty()
  brandId: string;

  @ApiProperty({
    description: 'The name of the glass model',
    example: 'Aviator Classic',
    default: 'Standard Model'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The description of the glass model',
    example: 'Classic aviator style with metal frame',
    default: 'No description available'
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The base price of the glass model',
    example: '199.99',
    default: '99.99'
  })
  @IsNumber()
  @Min(0)
  basePrice: number;

  @ApiProperty({
    description: 'Indicates whether the glass model is existing and available',
    example: 'true',
    default: 'true'
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}