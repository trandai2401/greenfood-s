import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Đại và đĩ hòa yêu nhau!';
  }
}
