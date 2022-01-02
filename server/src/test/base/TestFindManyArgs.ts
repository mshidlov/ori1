import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestWhereInput } from "./TestWhereInput";
import { Type } from "class-transformer";
import { TestOrderByInput } from "./TestOrderByInput";

@ArgsType()
class TestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TestWhereInput,
  })
  @Field(() => TestWhereInput, { nullable: true })
  @Type(() => TestWhereInput)
  where?: TestWhereInput;

  @ApiProperty({
    required: false,
    type: TestOrderByInput,
  })
  @Field(() => TestOrderByInput, { nullable: true })
  @Type(() => TestOrderByInput)
  orderBy?: TestOrderByInput;

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

export { TestFindManyArgs };
