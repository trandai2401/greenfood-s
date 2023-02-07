import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Đại đĩ và công chúa Hòa yêu nhau!';
  }
}
