import { ArgsType, Field } from "@nestjs/graphql";
import { TestWhereUniqueInput } from "./TestWhereUniqueInput";

@ArgsType()
class TestFindUniqueArgs {
  @Field(() => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;
}

export { TestFindUniqueArgs };
