import { Strategy } from 'passport-jwt';
import { UserRepository } from 'src/users/user.repository';
import { Payload } from './jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: Payload): Promise<import("../../users/user.schema").User>;
}
export {};
