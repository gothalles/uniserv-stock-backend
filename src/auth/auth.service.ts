import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/users.entity';
import { Repository } from 'typeorm';

//bcrypt
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    //private usersService: UsersService,
  ) {}

  login(username: string, password: string) {
    var user: User = this.validateCredentials(username, password);

    if (!user) {
      return null;
    }

    const payload = {
      sub: user.code,
      username: user.username,
      fullName: user.full_name,
    };

    return this.jwtService.sign(payload);
  }

  validateCredentials(username: string, password: string): User {
    var user: User;
    var usersRepository: Repository<User> = new Repository<User>();
    var usersService: UsersService = new UsersService(usersRepository);

    console.log(usersService);

    if (!usersService) {
      return null;
    }

    usersService.findByUsername(username);

    //.then((data) => {
    //  console.log(data);
    // user = data;
    //});

    if (!user) {
      return null;
    }

    if (bcrypt.compareSync(password, user.password_web)) {
      return null;
    }

    return user;
  }
}
