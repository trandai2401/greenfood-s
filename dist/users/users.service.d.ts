import { Model } from 'mongoose';
import { UserDocument } from './schemas/User.schema';
export type UserAny = any;
export declare class UsersService {
    private catModel;
    constructor(catModel: Model<UserDocument>);
    private readonly users;
    findOne(username: string): Promise<UserAny | undefined>;
}
