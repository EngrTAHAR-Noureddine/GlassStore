import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsUUID, IsOptional, Min } from 'class-validator';

export class CreateGlassDto {
  @IsUUID()
  @IsNotEmpty()
  brandId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  basePrice: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}