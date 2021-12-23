import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaskUserService } from "./taskUser.service";
import { TaskUserControllerBase } from "./base/taskUser.controller.base";

@swagger.ApiTags("task-users")
@common.Controller("task-users")
export class TaskUserController extends TaskUserControllerBase {
  constructor(
    protected readonly service: TaskUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
