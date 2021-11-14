import { Model } from "mongoose";
import { UserRequestDto } from "./dto/user.request.dto";
import { User } from "./users.schema";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    signUp(body: UserRequestDto): void;
}
