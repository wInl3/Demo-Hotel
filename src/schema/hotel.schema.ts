import { Schema } from 'mongoose';

export const HotelSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
});
