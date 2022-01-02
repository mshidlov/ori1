import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TadaService } from "./tada.service";
import { TadaControllerBase } from "./base/tada.controller.base";

@swagger.ApiTags("tadas")
@common.Controller("tadas")
export class TadaController extends TadaControllerBase {
  constructor(
    protected readonly service: TadaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
