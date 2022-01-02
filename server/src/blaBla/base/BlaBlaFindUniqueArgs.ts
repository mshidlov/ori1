import { ArgsType, Field } from "@nestjs/graphql";
import { BlaBlaWhereUniqueInput } from "./BlaBlaWhereUniqueInput";

@ArgsType()
class BlaBlaFindUniqueArgs {
  @Field(() => BlaBlaWhereUniqueInput, { nullable: false })
  where!: BlaBlaWhereUniqueInput;
}

export { BlaBlaFindUniqueArgs };
