import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument, Mongoose } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  password: string;

  @Prop()
  age: mongoose.Schema.Types.Date;

  @Prop()
  google_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
