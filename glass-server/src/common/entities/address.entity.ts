import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    userId: number;
    @Column()
    street: string;
    @Column()
    city: string;
    @Column()
    state: string;
    @Column({default: false})
    isShipping: boolean;
    @Column({default: false})
    isBilling: boolean;
    @Column()
    zipCode: string;
    @Column()
    country: string;
}