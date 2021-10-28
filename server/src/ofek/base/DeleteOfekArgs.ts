import { ArgsType, Field } from "@nestjs/graphql";
import { OfekWhereUniqueInput } from "./OfekWhereUniqueInput";

@ArgsType()
class DeleteOfekArgs {
  @Field(() => OfekWhereUniqueInput, { nullable: false })
  where!: OfekWhereUniqueInput;
}

export { DeleteOfekArgs };
