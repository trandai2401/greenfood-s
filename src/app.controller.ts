import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UseFilters } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @UseFilters(HttpExceptionFilter)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
