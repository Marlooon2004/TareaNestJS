import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Create-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(parseInt(id));
  }

  @Put(':id')
  updUser(@Body() item: CreateUserDto, @Param('id') id: string) {
    return this.userService.actualizarUser(parseInt(id), item);
  }

  @Delete(':id')
  delUser(@Param('id') id: string) {
    return this.userService.eliminarUser(parseInt(id));
  }
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }
  @Post()
  createUser(@Body() item: CreateUserDto) {
    return this.userService.registrarUser(item);
  }
}
