import { UserRepository } from 'src/users/user.repository';
import { LoginRequestDto } from './dto/login.request';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    jwtLogin(data: LoginRequestDto): Promise<{
        token: string;
    }>;
}
