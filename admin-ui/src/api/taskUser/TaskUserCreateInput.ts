import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUserCreateInput = {
  task?: TaskWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
