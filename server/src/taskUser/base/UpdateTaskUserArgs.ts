import { ArgsType, Field } from "@nestjs/graphql";
import { TaskUserWhereUniqueInput } from "./TaskUserWhereUniqueInput";
import { TaskUserUpdateInput } from "./TaskUserUpdateInput";

@ArgsType()
class UpdateTaskUserArgs {
  @Field(() => TaskUserWhereUniqueInput, { nullable: false })
  where!: TaskUserWhereUniqueInput;
  @Field(() => TaskUserUpdateInput, { nullable: false })
  data!: TaskUserUpdateInput;
}

export { UpdateTaskUserArgs };
