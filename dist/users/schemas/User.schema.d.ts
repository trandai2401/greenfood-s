import mongoose, { HydratedDocument } from 'mongoose';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    username: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    age: mongoose.Schema.Types.Date;
    google_id: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User>;
