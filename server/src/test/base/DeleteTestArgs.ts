import { ArgsType, Field } from "@nestjs/graphql";
import { TestWhereUniqueInput } from "./TestWhereUniqueInput";

@ArgsType()
class DeleteTestArgs {
  @Field(() => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;
}

export { DeleteTestArgs };
