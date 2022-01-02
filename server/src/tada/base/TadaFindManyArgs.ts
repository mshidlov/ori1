import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TadaWhereInput } from "./TadaWhereInput";
import { Type } from "class-transformer";
import { TadaOrderByInput } from "./TadaOrderByInput";

@ArgsType()
class TadaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TadaWhereInput,
  })
  @Field(() => TadaWhereInput, { nullable: true })
  @Type(() => TadaWhereInput)
  where?: TadaWhereInput;

  @ApiProperty({
    required: false,
    type: TadaOrderByInput,
  })
  @Field(() => TadaOrderByInput, { nullable: true })
  @Type(() => TadaOrderByInput)
  orderBy?: TadaOrderByInput;

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

export { TadaFindManyArgs };
