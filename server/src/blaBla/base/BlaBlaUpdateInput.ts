import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TadaWhereUniqueInput } from "../../tada/base/TadaWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class BlaBlaUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TadaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TadaWhereUniqueInput)
  @IsOptional()
  @Field(() => TadaWhereUniqueInput, {
    nullable: true,
  })
  tada?: TadaWhereUniqueInput | null;
}
export { BlaBlaUpdateInput };
