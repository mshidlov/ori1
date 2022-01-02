import { TadaWhereUniqueInput } from "../tada/TadaWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  tada?: TadaWhereUniqueInput | null;
  username?: string;
};
