import { ArgsType, Field } from "@nestjs/graphql";
import { TaskUserWhereUniqueInput } from "./TaskUserWhereUniqueInput";

@ArgsType()
class DeleteTaskUserArgs {
  @Field(() => TaskUserWhereUniqueInput, { nullable: false })
  where!: TaskUserWhereUniqueInput;
}

export { DeleteTaskUserArgs };
