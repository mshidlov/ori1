import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlaBlaService } from "./blaBla.service";
import { BlaBlaControllerBase } from "./base/blaBla.controller.base";

@swagger.ApiTags("bla-blas")
@common.Controller("bla-blas")
export class BlaBlaController extends BlaBlaControllerBase {
  constructor(
    protected readonly service: BlaBlaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
