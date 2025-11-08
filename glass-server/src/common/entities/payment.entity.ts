import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    orderId: number;
    @Column()
    amount: number;
    @Column()
    paymentMethod: string;
    @Column()
    paymentDate: Date;
    @Column()
    status: string;
}