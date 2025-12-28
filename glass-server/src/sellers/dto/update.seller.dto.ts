// src/sellers/dto/update-seller.dto.ts
import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateSellerDto } from './create.seller.dto';

// Use OmitType to ensure password cannot be updated through this general profile route
export class UpdateSellerDto extends PartialType(OmitType(CreateSellerDto, ['password'] as const)) {}