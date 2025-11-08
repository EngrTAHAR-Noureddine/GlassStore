import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    orderId: number;
    @Column()
    productVariantId: number;
    @Column()
    quantity: number;
    @Column()
    unitPrice: number;
    @Column()
    totalPrice: number;
}