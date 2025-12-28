// src/sellers/entities/stripe-account.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Seller } from './seller.entity';

@Entity('stripe_accounts')
export class StripeAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  stripeAccountId: string; // e.g., acct_123...

  @Column({ default: false })
  detailsSubmitted: boolean;

  @Column({ default: 'pending' })
  status: string; // pending, active, restricted

  @OneToOne(() => Seller, (seller) => seller.stripeAccount)
  seller: Seller;
}