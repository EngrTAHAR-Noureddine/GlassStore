import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateDeliveryServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  baseRate: number;
}