import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create.user.dto';
import LoginDto from './dto/login.dto';
import { CreateSellerDto } from '../sellers/dto/create.seller.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
@Public()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('user/register')
  async registerUser(@Body() registerDto: CreateUserDto) {
    return this.authService.registerUser(registerDto);
  }

  @Post('user/login')
  async loginUser(@Body() loginDto: LoginDto) {
    return this.authService.loginUser(loginDto.email, loginDto.password);
  }

  @Post('seller/register')
  async registerSeller(@Body() registerDto: CreateSellerDto) {
    return this.authService.registerSeller(registerDto);
  }

  @Post('seller/login')
  async loginSeller(@Body() loginDto: LoginDto) {
    return this.authService.loginSeller(loginDto.email, loginDto.password);
  }
}
