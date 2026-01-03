import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderItemService } from './order.item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order.item.entity';
import { OrdersController } from './orders.controller';

@Module({
  imports:[
        TypeOrmModule.forFeature([
                Order,
                OrderItem
        ]),
      ],
  providers: [OrdersService, OrderItemService],
  controllers: [OrdersController]
})
export class OrdersModule {}
