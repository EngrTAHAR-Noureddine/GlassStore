import { IsNotEmptyObject, IsOptional, IsString } from "class-validator";
import { UpdateGlassDto } from "./update.glass.dto";
import { UpdateProductVariantDto } from "./update.product.variant.dto";
import { Optional } from "@nestjs/common";
import { CreateBrandDto } from "./create.brand.dto";


export class UpdateProductDto {

  @IsNotEmptyObject()
  @Optional()
  glass?: UpdateGlassDto;

  @Optional()
  brand?: CreateBrandDto;
  
  @IsString()
  @IsOptional()
  idBrand?: string;

  @IsNotEmptyObject()
  @Optional()
  variant?: UpdateProductVariantDto;
}