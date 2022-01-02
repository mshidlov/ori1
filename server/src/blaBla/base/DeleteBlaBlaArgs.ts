import { ArgsType, Field } from "@nestjs/graphql";
import { BlaBlaWhereUniqueInput } from "./BlaBlaWhereUniqueInput";

@ArgsType()
class DeleteBlaBlaArgs {
  @Field(() => BlaBlaWhereUniqueInput, { nullable: false })
  where!: BlaBlaWhereUniqueInput;
}

export { DeleteBlaBlaArgs };
