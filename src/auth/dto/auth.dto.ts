import { PickType } from '@nestjs/swagger';
import { User } from 'src/users/user.schema';

export class LoginResponseDto extends PickType(User, [
  'email',
  'password',
] as const) {}
