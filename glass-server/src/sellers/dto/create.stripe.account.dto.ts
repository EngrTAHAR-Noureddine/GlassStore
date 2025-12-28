import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateStripeAccountDto {
  @IsString()
  @IsNotEmpty()
  stripeAccountId: string;

  @IsBoolean()
  @IsOptional()
  detailsSubmitted?: boolean;
}