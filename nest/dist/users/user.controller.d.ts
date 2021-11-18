import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request';
import { UserRequestDto } from './dto/user.request.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    getCurrentUser(user: any): any;
    signUp(body: UserRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
    login(data: LoginRequestDto): Promise<{
        token: string;
    }>;
}
