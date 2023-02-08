import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/User.schema';

export type UserAny = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}

  private readonly users: UserAny[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<UserAny | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
