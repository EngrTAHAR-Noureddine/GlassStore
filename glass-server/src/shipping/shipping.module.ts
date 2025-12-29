import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { DeliveryServiceService } from './delivery.service.service';

@Module({
  providers: [ShippingService, DeliveryServiceService]
})
export class ShippingModule {}
