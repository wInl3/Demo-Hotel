import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Hotel } from "../hotel/hotel.entity";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    idRoom: number;

    @Column()
    roomNumber: string;

    @Column()
    type: string;

    @Column()
    price: number;

    @ManyToOne(() => Hotel, hotel => hotel.rooms)
    hotel: Hotel;
}