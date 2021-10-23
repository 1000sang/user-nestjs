import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginResponseDto } from 'src/auth/dto/auth.dto';
import { LoginRequestDto } from 'src/auth/dto/login.request';
import { ReadOnlyUserDto } from './dto/user.dto';
import { UserRequestDto } from './dto/user.request.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ReadOnlyUserDto,
  })
  @Post('/signup')
  async signUp(@Body() body: UserRequestDto) {
    return await this.userService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @ApiResponse({
    status: 500,
    description: 'Server Error...',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: LoginResponseDto,
  })
  @Post('/login')
  login(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogin(data);
  }
}
