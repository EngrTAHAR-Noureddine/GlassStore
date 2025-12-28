import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Shipping } from './shipping.entity';

@Entity('delivery_services')
export class DeliveryService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  baseRate: number;

  @OneToMany(() => Shipping, (shipping) => shipping.deliveryService)
  shippings: Shipping[];
}