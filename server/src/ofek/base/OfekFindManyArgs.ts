import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OfekWhereInput } from "./OfekWhereInput";
import { Type } from "class-transformer";
import { OfekOrderByInput } from "./OfekOrderByInput";

@ArgsType()
class OfekFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OfekWhereInput,
  })
  @Field(() => OfekWhereInput, { nullable: true })
  @Type(() => OfekWhereInput)
  where?: OfekWhereInput;

  @ApiProperty({
    required: false,
    type: OfekOrderByInput,
  })
  @Field(() => OfekOrderByInput, { nullable: true })
  @Type(() => OfekOrderByInput)
  orderBy?: OfekOrderByInput;

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

export { OfekFindManyArgs };
