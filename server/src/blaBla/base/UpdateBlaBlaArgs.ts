import { ArgsType, Field } from "@nestjs/graphql";
import { BlaBlaWhereUniqueInput } from "./BlaBlaWhereUniqueInput";
import { BlaBlaUpdateInput } from "./BlaBlaUpdateInput";

@ArgsType()
class UpdateBlaBlaArgs {
  @Field(() => BlaBlaWhereUniqueInput, { nullable: false })
  where!: BlaBlaWhereUniqueInput;
  @Field(() => BlaBlaUpdateInput, { nullable: false })
  data!: BlaBlaUpdateInput;
}

export { UpdateBlaBlaArgs };
