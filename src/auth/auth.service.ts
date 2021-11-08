import { Injectable, UnauthorizedException } from '@nestjs/common';
import { isEmpty } from 'class-validator';
import { UserRepository } from '../users/user.repository';
import { LoginRequestDto } from './dto/login.request';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogin(data: LoginRequestDto) {
    const { email, password } = data;

    const user = await this.userRepository.findUserByEmail(email);

    if (isEmpty(user)) {
      throw new UnauthorizedException('user not found');
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('user not found');
    }

    const payload = { email: email, sub: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
