import {
  IsString,
  IsNumber,
  IsEmail,
  MinLength,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  id: number;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @MinLength(6)
  @IsString()
  password: string;
}
