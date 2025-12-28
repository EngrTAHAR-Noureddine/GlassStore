import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Glass } from './glass.entity';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Glass, (glass) => glass.brand)
  glasses: Glass[];
}