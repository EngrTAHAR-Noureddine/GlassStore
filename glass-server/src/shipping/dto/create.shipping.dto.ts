import { IsNumber, IsOptional, IsString, IsUUID, Min } from "class-validator";

export class CreateShippingDto {
  @IsUUID()
  orderId: string;

  @IsUUID()
  deliveryServiceId: string;

  @IsNumber()
  @Min(0)
  cost: number;

  @IsString()
  @IsOptional()
  trackingNumber?: string;
}