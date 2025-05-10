import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './hotel/hotel.entity';
import { Room } from './room/room.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(  
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async getHello(): Promise<Hotel> {
    const hotel = new Hotel();
    hotel.name = 'Hotel 1';
    hotel.address = '123 Main St';
    return await this.hotelRepository.save(hotel);
  }

  async getHotels(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  async updateHotel(id: number, hotel: Hotel): Promise<Hotel> {
    await this.hotelRepository.update(id, hotel);
    const updatedHotel = await this.hotelRepository.findOne({ where: { id } });
    if (!updatedHotel) {
      throw new NotFoundException('Hotel not found');
    }
    return updatedHotel;
  }

  async deleteHotel(id: number): Promise<void> {
    const result = await this.hotelRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Hotel not found');
    }
  } 

  async createRoom(room: Room): Promise<Room> {
    return this.roomRepository.save(room);
  }

  async deleteRoom(id: number): Promise<void> {
    const result = await this.roomRepository.delete({ idRoom: id });
    if (result.affected === 0) {
      throw new NotFoundException('Room not found');
    }
  }

  async getRooms(): Promise<Room[]> {
    return this.roomRepository.find({ relations: ['hotel'] });
  }
  
}
