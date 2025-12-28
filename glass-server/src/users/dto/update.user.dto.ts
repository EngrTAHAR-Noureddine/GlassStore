import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create.user.dto';

// We take CreateUserDto, remove the password, and make the rest optional
export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['password', 'email', 'phoneNumber'] as const)) {}