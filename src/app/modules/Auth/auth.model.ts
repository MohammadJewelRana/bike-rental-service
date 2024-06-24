import { Schema, model } from 'mongoose';
import { TUser } from './auth.interface';
 

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},
{
    timestamps:true
});

export const AuthUser = model<TUser>('User', userSchema);
