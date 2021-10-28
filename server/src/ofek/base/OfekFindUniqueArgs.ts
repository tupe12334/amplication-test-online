import { ArgsType, Field } from "@nestjs/graphql";
import { OfekWhereUniqueInput } from "./OfekWhereUniqueInput";

@ArgsType()
class OfekFindUniqueArgs {
  @Field(() => OfekWhereUniqueInput, { nullable: false })
  where!: OfekWhereUniqueInput;
}

export { OfekFindUniqueArgs };
