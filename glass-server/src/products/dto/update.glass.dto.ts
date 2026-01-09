import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateGlassDto } from './create.glass.dto';

// We omit brandId from update because typically you don't change the brand of an existing product
export class UpdateGlassDto extends PartialType(CreateGlassDto) {} // OmitType(CreateGlassDto, ['brandId'] as const)