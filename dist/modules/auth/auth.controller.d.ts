import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerUser(userobj: RegisterAuthDto): RegisterAuthDto;
    login(credentiales: LoginAuthDto): {
        token: string;
    };
}
