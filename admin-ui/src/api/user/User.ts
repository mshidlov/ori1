import { TaskUser } from "../taskUser/TaskUser";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  taskUsers?: Array<TaskUser>;
  updatedAt: Date;
  username: string;
};
