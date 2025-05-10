import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Hotel } from './hotel/hotel.entity';
import { Room } from './room/room.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Hotel> {
    return this.appService.getHello();
  }

  @Get('hotels')
  getHotels(): Promise<Hotel[]> {
    return this.appService.getHotels();
  }
  
  @Put('hotels/:id')
  updateHotel(@Param('id') id: number, @Body() hotel: Hotel): Promise<Hotel> {
    return this.appService.updateHotel(id, hotel);
  }

  @Delete('hotels/:id')
  deleteHotel(@Param('id') id: number): Promise<void> {
    return this.appService.deleteHotel(id);
  }

  @Get('rooms')
  getRooms(): Promise<Room[]> {
    return this.appService.getRooms();
  }

  @Post('rooms')
  createRoom(@Body() room: Room): Promise<Room> {
    return this.appService.createRoom(room);
  }
  

  @Delete('rooms/:id')
  deleteRoom(@Param('id') id: number): Promise<void> {
    return this.appService.deleteRoom(id);
  }


}