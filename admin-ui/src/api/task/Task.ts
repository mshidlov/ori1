import { TaskUser } from "../taskUser/TaskUser";

export type Task = {
  createdAt: Date;
  id: string;
  taskUsers?: Array<TaskUser>;
  updatedAt: Date;
};
