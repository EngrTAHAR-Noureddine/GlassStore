import { PartialType } from "@nestjs/mapped-types";
import { CreateShippingDto } from "./create.shipping.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdateShippingDto extends PartialType(CreateShippingDto) {
  @IsString()
  @IsOptional()
  status?: string; // Standard update: changing status to 'shipped' or 'delivered'
}