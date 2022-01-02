import { StringFilter } from "../../util/StringFilter";
import { TadaWhereUniqueInput } from "../tada/TadaWhereUniqueInput";

export type BlaBlaWhereInput = {
  id?: StringFilter;
  tada?: TadaWhereUniqueInput;
};
