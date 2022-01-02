import { ArgsType, Field } from "@nestjs/graphql";
import { BlaBlaCreateInput } from "./BlaBlaCreateInput";

@ArgsType()
class CreateBlaBlaArgs {
  @Field(() => BlaBlaCreateInput, { nullable: false })
  data!: BlaBlaCreateInput;
}

export { CreateBlaBlaArgs };
