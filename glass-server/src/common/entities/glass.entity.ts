import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Glass {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    brand: string;
    @Column()
    sellerId: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column({ type: 'float' })
    basePrice: number;
    @Column({ default: true })
    isAvailable: boolean;
}