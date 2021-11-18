"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("../../users/user.schema");
class LoginResponseDto extends (0, swagger_1.PickType)(user_schema_1.User, [
    'email',
    'password',
]) {
}
exports.LoginResponseDto = LoginResponseDto;
//# sourceMappingURL=auth.dto.js.map