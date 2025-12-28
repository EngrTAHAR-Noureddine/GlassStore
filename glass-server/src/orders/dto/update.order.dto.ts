import { IsOptional, IsString } from "class-validator";

export class UpdateOrderDto {
  @IsString()
  @IsOptional()
    // Usually, you only update the status of an order (e.g., 'shipped')
  status?: string; 
}