/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import {
  IsString,
  IsDate,
  IsInt,
  IsOptional,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Product } from "../../product/base/Product";
@ObjectType()
class Order {
  @IsString()
  @Field(() => String)
  @ApiProperty({
    required: true,
    type: String,
  })
  id!: string;

  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  @ApiProperty({
    required: true,
  })
  createdAt!: Date;

  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  @ApiProperty({
    required: true,
  })
  updatedAt!: Date;

  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: Number,
  })
  quantity!: number | null;

  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: Number,
  })
  discount!: number | null;

  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: Number,
  })
  totalPrice!: number | null;

  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => Customer,
  })
  customer?: Customer | null;

  @ValidateNested()
  @Type(() => Product)
  @IsOptional()
  @ApiProperty({
    required: false,
    type: () => Product,
  })
  product?: Product | null;
}
export { Order };
