import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './Create-user.dto';

@Injectable()
export class UserService {
  private users = [
    { name: 'Alice', id: 1, email: 'alice@example.com', password: 'Alice123' },
    { name: 'Bob', id: 2, email: 'bob@example.com', password: 'bob234' },
  ];

  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }
  actualizarUser(id: number, item: CreateUserDto) {
    const userV = this.users.find((user) => user.id === id);
    if (userV) {
      Object.assign(userV, item);
    } else {
      throw new NotFoundException('Usuario no encontrado');
    }
  }
  eliminarUser(id: number) {
    const userV = this.users.find((user) => user.id === id);
    if (userV) {
      this.users = this.users.filter((user) => user.id === id);
    } else {
      throw new NotFoundException('Usuario no encontrado');
    }
  }
  getAllUsers() {
    return this.users;
  }
  registrarUser(item: CreateUserDto) {
    this.users.push(item);
  }
}
