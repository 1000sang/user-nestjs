import { User } from '../user.schema';
declare const ReadOnlyUserDto_base: import("@nestjs/common").Type<Pick<User, "email" | "userName">>;
export declare class ReadOnlyUserDto extends ReadOnlyUserDto_base {
    id: string;
}
export {};
