import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { LoginResponseDto } from '../auth/dto/auth.dto';
import { LoginRequestDto } from '../auth/dto/login.request';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { CurrentUser } from '../common/decorators/user.decorator';
import { ReadOnlyUserDto } from './dto/user.dto';
import { UserRequestDto } from './dto/user.request.dto';
import { UserService } from './user.service';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '유저 정보 가져오기' })
  getCurrentUser(@CurrentUser() user) {
    return user.readOnlyData;
  }

  @Post('/signup')
  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ReadOnlyUserDto,
  })
  async signUp(@Body() body: UserRequestDto) {
    return await this.userService.signUp(body);
  }

  @Post('/login')
  @ApiOperation({ summary: '로그인' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: LoginResponseDto,
  })
  login(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogin(data);
  }
}
