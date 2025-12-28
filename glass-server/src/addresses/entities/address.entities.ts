import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  streetAddress: string;

  @Column()
  city: string;

  @Column()
  stateProvince: string;

  @Column()
  zipCode: string;

  @Column()
  country: string;

  @Column({ default: false })
  isShippingDefault: boolean;

  @Column({ default: false })
  isBillingDefault: boolean;

  // This creates the actual relationship in the DB
  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: 'userId' })
  user: User;
}