import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { JwtGuard } from '../auth/jwt.guard';

@UseGuards(JwtGuard)
@Controller('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: number) {
    return this.usersService.findOne(code);
  }
}
