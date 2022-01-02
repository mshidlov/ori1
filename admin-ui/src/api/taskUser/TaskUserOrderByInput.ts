import { SortOrder } from "../../util/SortOrder";

export type TaskUserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
