import { ArgsType, Field } from "@nestjs/graphql";
import { TadaWhereUniqueInput } from "./TadaWhereUniqueInput";

@ArgsType()
class DeleteTadaArgs {
  @Field(() => TadaWhereUniqueInput, { nullable: false })
  where!: TadaWhereUniqueInput;
}

export { DeleteTadaArgs };
