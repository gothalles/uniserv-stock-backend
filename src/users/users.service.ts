import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findByUsername(username: string): Promise<User> {
    return (await this.usersRepository.find()).find(
      (u) => u.username === username,
    );
  }

  async findOne(code: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { code: code },
    });
  }
}
