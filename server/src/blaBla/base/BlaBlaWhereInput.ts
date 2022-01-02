import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { TadaWhereUniqueInput } from "../../tada/base/TadaWhereUniqueInput";
@InputType()
class BlaBlaWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  tada?: TadaWhereUniqueInput;
}
export { BlaBlaWhereInput };
