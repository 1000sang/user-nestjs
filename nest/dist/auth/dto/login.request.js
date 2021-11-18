"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("../../users/user.schema");
class LoginRequestDto extends (0, swagger_1.PickType)(user_schema_1.User, [
    'email',
    'password',
]) {
}
exports.LoginRequestDto = LoginRequestDto;
//# sourceMappingURL=login.request.js.map