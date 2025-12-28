import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Glass } from './glass.entity';

@Entity('product_variants')
export class ProductVariant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  glassId: string;

  @Column()
  color: string;

  @Column()
  size: string;

  @Column()
  frameMaterial: string;

  @Column()
  shadeColor: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  priceAdjustment: number;

  @Column({ default: 0 })
  stock: number;

  @ManyToOne(() => Glass, (glass) => glass.id)
  @JoinColumn({ name: 'glassId' })
  glass: Glass;
}