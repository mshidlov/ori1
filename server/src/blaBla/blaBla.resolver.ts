import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BlaBlaResolverBase } from "./base/blaBla.resolver.base";
import { BlaBla } from "./base/BlaBla";
import { BlaBlaService } from "./blaBla.service";

@graphql.Resolver(() => BlaBla)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlaBlaResolver extends BlaBlaResolverBase {
  constructor(
    protected readonly service: BlaBlaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
