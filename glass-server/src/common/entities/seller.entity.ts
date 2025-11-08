import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;
    @Column({ unique: true })
    phoneNumber: string;
    @Column()
    createdAt: Date;
    @Column()
    updatedAt: Date;
    @Column({ nullable: true })
    deletedAt: Date | null;
    @Column()
    storeName: string;
    @Column()
    storeDescription: string;
    @Column({nullable: true})
    stripeId: string;
    @Column({ type: 'float', default: 0 })
    rating: number;
}