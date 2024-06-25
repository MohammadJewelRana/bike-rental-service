import { Schema, model } from 'mongoose';
import { TRental } from './boking.interface';

const rentalSchema = new Schema<TRental>({
  userId: {
    type: Schema.Types.ObjectId,
    
    ref: 'User',
  },
  bikeId: {
    type: Schema.Types.ObjectId,
    required: [true, 'Bike id is required'],
    ref: 'Bike',
  },
  startTime: {
    type: Date,
    required: true,
  },
  returnTime: {
    type: Date,
    default:null,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
  isReturned: {
    type: Boolean,
    default: false,
  },
});

export const Rental = model<TRental>('Rental', rentalSchema);
