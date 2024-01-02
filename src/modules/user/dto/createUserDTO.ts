// create-user.dto.ts

import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'User name is required' })
  userName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsNotEmpty({ message: 'User name is required' })
  @IsOptional()
  userName?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  @IsOptional()
  email?: string;
}
