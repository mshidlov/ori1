import { Module } from "@nestjs/common";
import { TaskUserModuleBase } from "./base/taskUser.module.base";
import { TaskUserService } from "./taskUser.service";
import { TaskUserController } from "./taskUser.controller";
import { TaskUserResolver } from "./taskUser.resolver";

@Module({
  imports: [TaskUserModuleBase],
  controllers: [TaskUserController],
  providers: [TaskUserService, TaskUserResolver],
  exports: [TaskUserService],
})
export class TaskUserModule {}
