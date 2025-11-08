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
    @Column()
    deletedAt: Date | null;
}