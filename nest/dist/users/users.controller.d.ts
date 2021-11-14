import { UserService } from "./users.service";
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    signUp(body: any): Promise<void>;
}
