import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { SellersModule } from './sellers/sellers.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { ShippingModule } from './shipping/shipping.module';
import { AddressesModule } from './addresses/addresses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user/user.service';
import appConfig from './common/config/app.config';
import Joi from 'joi';

@Module({
  imports: [
    // To set Type orm to connect to the database PG  
    TypeOrmModule.forRootAsync(
      {
        useFactory: () => ({
          type: 'postgres',
          host: process.env.DATABASE_HOST,
          port: +(process.env.DATABASE_PORT || 5432),
          username:  process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          autoLoadEntities: true,
          synchronize: true,
        })
    }),
    ConfigModule.forRoot({
    load: [appConfig],
    validationSchema: Joi.object({
      DATABASE_HOST: Joi.string().required(),
      DATABASE_PORT: Joi.number().default(5432).required(),
      DATABASE_USER: Joi.string().required(),
      DATABASE_PASSWORD: Joi.string().required(),
      DATABASE_NAME: Joi.string().required(),
    }),
  }),
    UsersModule, 
    SellersModule, 
    ProductsModule, 
    OrdersModule, 
    PaymentsModule, 
    ShippingModule, 
    AddressesModule
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
