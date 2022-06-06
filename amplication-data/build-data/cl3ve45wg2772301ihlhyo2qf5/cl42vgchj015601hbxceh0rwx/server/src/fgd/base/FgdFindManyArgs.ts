/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FgdWhereInput } from "./FgdWhereInput";
import { Type } from "class-transformer";
import { FgdOrderByInput } from "./FgdOrderByInput";

@ArgsType()
class FgdFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FgdWhereInput,
  })
  @Field(() => FgdWhereInput, { nullable: true })
  @Type(() => FgdWhereInput)
  where?: FgdWhereInput;

  @ApiProperty({
    required: false,
    type: [FgdOrderByInput],
  })
  @Field(() => [FgdOrderByInput], { nullable: true })
  @Type(() => FgdOrderByInput)
  orderBy?: Array<FgdOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FgdFindManyArgs };