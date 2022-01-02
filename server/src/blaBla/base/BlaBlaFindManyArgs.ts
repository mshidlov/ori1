import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlaBlaWhereInput } from "./BlaBlaWhereInput";
import { Type } from "class-transformer";
import { BlaBlaOrderByInput } from "./BlaBlaOrderByInput";

@ArgsType()
class BlaBlaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlaBlaWhereInput,
  })
  @Field(() => BlaBlaWhereInput, { nullable: true })
  @Type(() => BlaBlaWhereInput)
  where?: BlaBlaWhereInput;

  @ApiProperty({
    required: false,
    type: BlaBlaOrderByInput,
  })
  @Field(() => BlaBlaOrderByInput, { nullable: true })
  @Type(() => BlaBlaOrderByInput)
  orderBy?: BlaBlaOrderByInput;

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

export { BlaBlaFindManyArgs };
