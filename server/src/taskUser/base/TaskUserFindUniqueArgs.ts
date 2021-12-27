import { ArgsType, Field } from "@nestjs/graphql";
import { TaskUserWhereUniqueInput } from "./TaskUserWhereUniqueInput";

@ArgsType()
class TaskUserFindUniqueArgs {
  @Field(() => TaskUserWhereUniqueInput, { nullable: false })
  where!: TaskUserWhereUniqueInput;
}

export { TaskUserFindUniqueArgs };
