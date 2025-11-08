import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shipping{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    orderId: number;
    @Column()
    shippingCost: number;
    @Column()
    shippedDate: Date;
    @Column()
    deliveryDate: Date;
    @Column()
    status: string;
    @Column()
    trackingNumber: string;
}