import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateProductVariantDto {

  @ApiProperty({
    description: 'The unique identifier of the product variant',
    example: "b1a7f5e2-3c4d-4e5f-8a9b-0c1d2e3f4a5b",
    default: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d"
  })
  @IsUUID()
  @Optional()
  id: string;

  @ApiProperty({
    description: 'The ID of the glass associated with the product variant',
    example: "b1a7f5e2-3c4d-4e5f-8a9b-0c1d2e3f4a5b",
    default: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d"
  })
  @IsUUID()
  glassId: string;

  @ApiProperty({
    description: 'The color of the product variant',
    example: "white",
    default: "black"
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'The size of the product variant',
    example: "M",
    default: "L"
  })
  @IsString()
  @IsNotEmpty()
  size: string;

  @ApiProperty({
    description: 'The frame material of the product variant',
    example: "plastic",
    default: "metal"
  })  
  @IsString()
  frameMaterial: string;

  @ApiProperty({
    description: 'The shade color of the product variant',
    example: "blue",
    default: "gray"
  })   
  @IsString()
  shadeColor: string;

  @ApiProperty({
    description: 'The price adjustment for the product variant',
    example: "20.00",
    default: "0.00"
  }) 
  @IsNumber()
  priceAdjustment: number;

  @ApiProperty({
    description: 'The stock quantity of the product variant',
    example: "100",
    default: "0"
  })   
  @IsNumber()
  @Min(0)
  stock: number;
}