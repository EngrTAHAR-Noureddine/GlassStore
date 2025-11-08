import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userId: number;
    @Column()
    sellerId: number;
    @Column()
    addressId: number;
    @Column()
    dateOrdered: Date;
    @Column()
    status: string;
    @Column()
    totalPrice: number;
}