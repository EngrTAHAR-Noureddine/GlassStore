import { IsNotEmpty, IsNotEmptyObject, IsOptional, IsString } from "class-validator";
import { CreateGlassDto } from "./create.glass.dto";
import { CreateBrandDto } from "./create.brand.dto";
import { CreateProductVariantDto } from "./create.product.variant.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({
    description: 'The glass details for the product',
    example: `
      {
        "brandId": "b1a7f5e2-3c4d-4e5f-8a9b-0c1d2e3f4a5b",
        "name": "Aviator Classic",
        "description": "Classic aviator style with metal frame",
        "basePrice": 199.99,
        "isActive": true
      }
    `,
    default: `
      {
        "brandId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
        "name": "Standard Model",
        "description": "No description available",
        "basePrice": 99.99,
        "isActive": true
      }
    `
  })
  @IsNotEmptyObject()
  glass: CreateGlassDto;

  
  @ApiProperty({
    description: 'The brand details for the product',
    example: `
      {
        "name": "Ray-Ban",
        "description": "High-quality eyewear brand"
      }
    `,
    default: `
      {
        "name": "Generic Brand",
        "description": "No description available"
      }
    `
  })
  @IsOptional()
  brand?: CreateBrandDto;

  @ApiProperty({
    description: 'The ID of the brand associated with the product',
    example: "b1a7f5e2-3c4d-4e5f-8a9b-0c1d2e3f4a5b",
    default: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d"
  })
  @IsString()
  @IsOptional()
  idBrand?: string;

  @ApiProperty({
    description: 'The variant details for the product',
    example: `
      {
        "color": "Black",
        "size": "Medium",
        "stock": 50,
        "additionalPrice": 20.00
      }
    `,
    default: `
      {
        "color": "Default Color",
        "size": "Standard Size",
        "stock": 100,
        "additionalPrice": 0.00
      }
    `,
  })
  @IsNotEmptyObject()
  variant: CreateProductVariantDto;
}