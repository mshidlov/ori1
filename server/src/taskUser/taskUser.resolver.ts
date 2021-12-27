import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TaskUserResolverBase } from "./base/taskUser.resolver.base";
import { TaskUser } from "./base/TaskUser";
import { TaskUserService } from "./taskUser.service";

@graphql.Resolver(() => TaskUser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TaskUserResolver extends TaskUserResolverBase {
  constructor(
    protected readonly service: TaskUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
