import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { StripeAccountService } from './stripe.account.service';

@Module({
  providers: [SellersService, StripeAccountService]
})
export class SellersModule {}
