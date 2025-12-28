// src/logistics/entities/shipping.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { DeliveryService } from './delivery.service.entity';

@Entity('shippings')
export class Shipping {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderId: string;

  @Column()
  deliveryServiceId: string;

  @Column({ nullable: true })
  trackingNumber: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cost: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ default: 'pending' })
  status: string; // e.g., 'pending', 'in-transit', 'delivered'

  @OneToOne(() => Order)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @ManyToOne(() => DeliveryService, (service) => service.shippings)
  @JoinColumn({ name: 'deliveryServiceId' })
  deliveryService: DeliveryService;
}