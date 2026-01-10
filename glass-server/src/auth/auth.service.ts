import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { Seller } from '../sellers/entities/seller.entity';
import { SellersService } from '../sellers/sellers.service';
import { CreateSellerDto } from '../sellers/dto/create.seller.dto';
import { CreateUserDto } from '../users/dto/create.user.dto';
import { UserRole } from '../common/constants/enums';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private sellersService: SellersService,
    private jwtService: JwtService,
  ) {}

  async registerUser(registerDto: CreateUserDto) {
    // 1. Hash the password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    
    // 2. Create user with hashed password
    const user = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });

    return this.generateToken(user);
  }

  async loginUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return this.generateToken(user);
  }

    async registerSeller(registerDto: CreateSellerDto) {
    // 1. Hash the password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    
    // 2. Create user with hashed password
    const user = await this.sellersService.create({
      ...registerDto,
      password: hashedPassword,
    });

    return this.generateToken(user);
  }

  async loginSeller(email: string, pass: string) {
    const user = await this.sellersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return this.generateToken(user);
  }

  private generateToken(user: User | Seller) {
    const payload = { sub: user.id, email: user.email , role: user instanceof User ? UserRole.USER : UserRole.SELLER  };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
