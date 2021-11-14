import { Model } from 'mongoose';
import { UserRequestDto } from './dto/user.request.dto';
import { User } from './user.schema';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findUserByEmail(email: string): Promise<User | null>;
    findUserByIdWithoutPassword(userId: string): Promise<User | null>;
    existByEmail(email: string): Promise<boolean>;
    create(user: UserRequestDto): Promise<User>;
}
