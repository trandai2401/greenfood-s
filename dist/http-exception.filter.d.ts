import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly authService;
    constructor(authService: AuthService);
    catch(exception: HttpException, host: ArgumentsHost): void;
}
