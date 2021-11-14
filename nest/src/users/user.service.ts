import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(body: UserRequestDto) {
    const { email, userName, password } = body;
    const isUserExist = await this.userRepository.existByEmail(email);

    if (isUserExist) {
      throw new UnauthorizedException('user already exist');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.create({
      email,
      userName,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}
