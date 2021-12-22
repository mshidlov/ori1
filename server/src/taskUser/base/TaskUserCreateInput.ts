import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class TaskUserCreateInput {
  @ApiProperty({
    required: false,
    type: () => TaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereUniqueInput)
  @IsOptional()
  @Field(() => TaskWhereUniqueInput, {
    nullable: true,
  })
  task?: TaskWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}
export { TaskUserCreateInput };
