import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderItemService } from './order.item.service';

@Module({
  providers: [OrdersService, OrderItemService]
})
export class OrdersModule {}
