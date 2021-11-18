import { Document } from "mongoose";
export declare class User extends Document {
    email: string;
    userName: string;
    password: string;
    imgUrl: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, {}>;
