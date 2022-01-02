import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUserWhereInput = {
  id?: StringFilter;
  task?: TaskWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
