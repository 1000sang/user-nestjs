import { User } from '../user.schema';
declare const UserRequestDto_base: import("@nestjs/common").Type<Pick<User, "email" | "userName" | "password">>;
export declare class UserRequestDto extends UserRequestDto_base {
}
export {};
