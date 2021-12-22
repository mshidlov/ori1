import { PrismaService } from "nestjs-prisma";
import { Prisma, TaskUser, Task, User } from "@prisma/client";

export class TaskUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TaskUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUserFindManyArgs>
  ): Promise<number> {
    return this.prisma.taskUser.count(args);
  }

  async findMany<T extends Prisma.TaskUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUserFindManyArgs>
  ): Promise<TaskUser[]> {
    return this.prisma.taskUser.findMany(args);
  }
  async findOne<T extends Prisma.TaskUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUserFindUniqueArgs>
  ): Promise<TaskUser | null> {
    return this.prisma.taskUser.findUnique(args);
  }
  async create<T extends Prisma.TaskUserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUserCreateArgs>
  ): Promise<TaskUser> {
    return this.prisma.taskUser.create<T>(args);
  }
  async update<T extends Prisma.TaskUserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUserUpdateArgs>
  ): Promise<TaskUser> {
    return this.prisma.taskUser.update<T>(args);
  }
  async delete<T extends Prisma.TaskUserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUserDeleteArgs>
  ): Promise<TaskUser> {
    return this.prisma.taskUser.delete(args);
  }

  async getTask(parentId: string): Promise<Task | null> {
    return this.prisma.taskUser
      .findUnique({
        where: { id: parentId },
      })
      .task();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.taskUser
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
