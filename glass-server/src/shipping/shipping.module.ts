import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { DeliveryServiceService } from './delivery.service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipping } from './entities/shipping.entity';
import { DeliveryService } from './entities/delivery.service.entity';
import { ShippingController } from './shipping.controller';

@Module({
  imports:[
            TypeOrmModule.forFeature([
                    Shipping,
                    DeliveryService
            ]),
          ],
  providers: [ShippingService, DeliveryServiceService],
  controllers: [ShippingController]
})
export class ShippingModule {}
