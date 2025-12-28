import { IsString, IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateProductVariantDto {
  @IsUUID()
  glassId: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  size: string;

  @IsString()
  frameMaterial: string;

  @IsString()
  shadeColor: string;

  @IsNumber()
  priceAdjustment: number;

  @IsNumber()
  @Min(0)
  stock: number;
}