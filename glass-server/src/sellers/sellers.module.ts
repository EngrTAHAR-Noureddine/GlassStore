import { forwardRef, Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { StripeAccountService } from './stripe.account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { StripeAccount } from './entities/stripe.account.entity';
import { SellersController } from './sellers.controller';

@Module({
  imports:[
      TypeOrmModule.forFeature([
              Seller,
              StripeAccount
      ]),
      // forwardRef(() => UsersModule), // to avoid circular dependency
  ],
  providers: [SellersService, StripeAccountService],
  controllers: [SellersController],
  exports: [SellersService],
})
export class SellersModule {}
