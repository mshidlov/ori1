import { Task } from "../task/Task";
import { User } from "../user/User";

export type TaskUser = {
  createdAt: Date;
  id: string;
  task?: Task | null;
  updatedAt: Date;
  user?: User | null;
};
