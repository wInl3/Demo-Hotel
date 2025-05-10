import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Room } from "../room/room.entity";

@Entity()
export class Hotel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;
    
    @OneToMany(() => Room, (room) => room.hotel)
    rooms: Room[];
    
}