import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtGuard)
  @Get()
  getCommand(@Req() req) {
    console.log(req);
    return { success: true };
  }

  @Post()
  login(@Body() body, @Res() response) {
    const token = this.authService.login(body.username, body.password);

    const payload = {
      token: '',
      message: '',
    };

    if (!token) {
      payload.message = 'User and/or password incorrect';

      response.status(HttpStatus.BAD_REQUEST).send(payload);
    } else {
      payload.token = token;

      response.status(HttpStatus.OK).send(payload);
    }
  }
}
