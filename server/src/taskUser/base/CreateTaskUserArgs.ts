import { ArgsType, Field } from "@nestjs/graphql";
import { TaskUserCreateInput } from "./TaskUserCreateInput";

@ArgsType()
class CreateTaskUserArgs {
  @Field(() => TaskUserCreateInput, { nullable: false })
  data!: TaskUserCreateInput;
}

export { CreateTaskUserArgs };
