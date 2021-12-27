import { TaskUser as TTaskUser } from "../api/taskUser/TaskUser";

export const TASKUSER_TITLE_FIELD = "id";

export const TaskUserTitle = (record: TTaskUser): string => {
  return record.id || record.id;
};
