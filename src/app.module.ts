import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Hotel } from './hotel/hotel.entity';
import { Room } from './room/room.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or 'postgres'
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'hotel_db',
      entities: [Hotel, Room],
      synchronize: true, // WARNING: disable in production
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/hotel_db'),
    TypeOrmModule.forFeature([Hotel, Room]),
  ],
})
export class AppModule {}
