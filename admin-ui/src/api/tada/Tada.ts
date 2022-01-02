import { BlaBla } from "../blaBla/BlaBla";
import { User } from "../user/User";

export type Tada = {
  blaBlas?: Array<BlaBla>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
