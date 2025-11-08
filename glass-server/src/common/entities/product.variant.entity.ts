import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductVariant {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    glassId: number;
    @Column()
    color: string;
    @Column()
    size: string;
    @Column()
    frameMaterial: string;
    @Column()
    shadeColor: [];
    @Column()
    priceAdjustment:number;
    @Column()
    stock: number;
}