import { UserRequestDto } from './dto/user.request.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    signUp(body: UserRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
