import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../user.schema';

export class ReadOnlyUserDto extends PickType(User, [
  'email',
  'userName',
] as const) {
  @ApiProperty({
    example: '1234',
    description: 'id',
    required: true,
  })
  id: string;
}
