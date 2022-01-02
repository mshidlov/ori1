import { TaskUserWhereInput } from "./TaskUserWhereInput";
import { TaskUserOrderByInput } from "./TaskUserOrderByInput";

export type TaskUserFindManyArgs = {
  where?: TaskUserWhereInput;
  orderBy?: TaskUserOrderByInput;
  skip?: number;
  take?: number;
};
