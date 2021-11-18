import { PickType } from '@nestjs/swagger';
import { User } from '../..//users/user.schema';

export class LoginRequestDto extends PickType(User, [
  'email',
  'password',
] as const) {}
