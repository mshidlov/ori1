import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskUserWhereInput } from "./TaskUserWhereInput";
import { Type } from "class-transformer";
import { TaskUserOrderByInput } from "./TaskUserOrderByInput";

@ArgsType()
class TaskUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TaskUserWhereInput,
  })
  @Field(() => TaskUserWhereInput, { nullable: true })
  @Type(() => TaskUserWhereInput)
  where?: TaskUserWhereInput;

  @ApiProperty({
    required: false,
    type: TaskUserOrderByInput,
  })
  @Field(() => TaskUserOrderByInput, { nullable: true })
  @Type(() => TaskUserOrderByInput)
  orderBy?: TaskUserOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TaskUserFindManyArgs };
