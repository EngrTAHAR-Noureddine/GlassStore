import { IsString, IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class CreatePaymentDto {
  @IsUUID()
  orderId: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @IsNumber()
  @Min(0)
  amountPaid: number;
}