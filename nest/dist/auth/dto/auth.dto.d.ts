import { User } from 'src/users/user.schema';
declare const LoginResponseDto_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class LoginResponseDto extends LoginResponseDto_base {
}
export {};
