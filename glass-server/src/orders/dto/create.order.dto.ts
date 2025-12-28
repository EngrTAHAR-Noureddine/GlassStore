import { IsUUID, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDto } from './create.order.item.dto';

export class CreateOrderDto {
  @IsUUID()
  sellerId: string;

  @IsUUID()
  shippingAddressId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];
}