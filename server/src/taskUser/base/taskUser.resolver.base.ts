import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateTaskUserArgs } from "./CreateTaskUserArgs";
import { UpdateTaskUserArgs } from "./UpdateTaskUserArgs";
import { DeleteTaskUserArgs } from "./DeleteTaskUserArgs";
import { TaskUserFindManyArgs } from "./TaskUserFindManyArgs";
import { TaskUserFindUniqueArgs } from "./TaskUserFindUniqueArgs";
import { TaskUser } from "./TaskUser";
import { Task } from "../../task/base/Task";
import { User } from "../../user/base/User";
import { TaskUserService } from "../taskUser.service";

@graphql.Resolver(() => TaskUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TaskUserResolverBase {
  constructor(
    protected readonly service: TaskUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "read",
    possession: "any",
  })
  async _taskUsersMeta(
    @graphql.Args() args: TaskUserFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [TaskUser])
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "read",
    possession: "any",
  })
  async taskUsers(
    @graphql.Args() args: TaskUserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskUser[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TaskUser",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => TaskUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "read",
    possession: "own",
  })
  async taskUser(
    @graphql.Args() args: TaskUserFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskUser | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "TaskUser",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => TaskUser)
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "create",
    possession: "any",
  })
  async createTaskUser(
    @graphql.Args() args: CreateTaskUserArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskUser> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "TaskUser",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"TaskUser"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        task: args.data.task
          ? {
              connect: args.data.task,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => TaskUser)
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "update",
    possession: "any",
  })
  async updateTaskUser(
    @graphql.Args() args: UpdateTaskUserArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskUser | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TaskUser",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"TaskUser"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          task: args.data.task
            ? {
                connect: args.data.task,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TaskUser)
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "delete",
    possession: "any",
  })
  async deleteTaskUser(
    @graphql.Args() args: DeleteTaskUserArgs
  ): Promise<TaskUser | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Task, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "read",
    possession: "any",
  })
  async task(
    @graphql.Parent() parent: TaskUser,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Task | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Task",
    });
    const result = await this.service.getTask(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TaskUser",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: TaskUser,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
