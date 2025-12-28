// src/products/entities/glass.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Brand } from './brand.entity';
import { Seller } from '../../sellers/entities/seller.entity';

@Entity('glasses')
export class Glass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sellerId: string;

  @Column()
  brandId: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  basePrice: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Brand, (brand) => brand.glasses)
  @JoinColumn({ name: 'brandId' })
  brand: Brand;

  @ManyToOne(() => Seller)
  @JoinColumn({ name: 'sellerId' })
  seller: Seller;
}