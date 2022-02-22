/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { IsOptional, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
@InputType()
class ProductWhereInput {
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  id?: StringFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  name?: StringNullableFilter;

  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  itemPrice?: FloatNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  description?: StringNullableFilter;

  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  orders?: OrderListRelationFilter;
}
export { ProductWhereInput };
