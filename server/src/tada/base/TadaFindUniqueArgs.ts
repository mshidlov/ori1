import { ArgsType, Field } from "@nestjs/graphql";
import { TadaWhereUniqueInput } from "./TadaWhereUniqueInput";

@ArgsType()
class TadaFindUniqueArgs {
  @Field(() => TadaWhereUniqueInput, { nullable: false })
  where!: TadaWhereUniqueInput;
}

export { TadaFindUniqueArgs };
