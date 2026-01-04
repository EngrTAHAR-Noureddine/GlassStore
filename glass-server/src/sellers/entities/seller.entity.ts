// src/sellers/entities/seller.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { StripeAccount } from './stripe.account.entity';

@Entity('sellers')
export class Seller {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  storeName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ select: false }) // Security: Hide password from default queries
  password: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  rating: number;

  @CreateDateColumn()
  createdAt: Date;

  // Relation: Each Seller has one Stripe Account for payouts
  @OneToOne(() => StripeAccount, (stripe) => stripe.seller, { cascade: true })
  @JoinColumn()
  stripeAccount: StripeAccount;
}