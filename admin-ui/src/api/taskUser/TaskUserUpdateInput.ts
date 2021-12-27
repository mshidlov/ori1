import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUserUpdateInput = {
  task?: TaskWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
