import { IsOptional, IsString } from "class-validator";

export class UpdatePaymentDto {
  @IsString()
  @IsOptional()
  status?: string;
}