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
import { DeleteTadaArgs } from "./DeleteTadaArgs";
import { TadaFindManyArgs } from "./TadaFindManyArgs";
import { TadaFindUniqueArgs } from "./TadaFindUniqueArgs";
import { Tada } from "./Tada";
import { BlaBlaFindManyArgs } from "../../blaBla/base/BlaBlaFindManyArgs";
import { BlaBla } from "../../blaBla/base/BlaBla";
import { TadaService } from "../tada.service";

@graphql.Resolver(() => Tada)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TadaResolverBase {
  constructor(
    protected readonly service: TadaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tada",
    action: "read",
    possession: "any",
  })
  async _tadasMeta(
    @graphql.Args() args: TadaFindManyArgs
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

  @graphql.Query(() => [Tada])
  @nestAccessControl.UseRoles({
    resource: "Tada",
    action: "read",
    possession: "any",
  })
  async tadas(
    @graphql.Args() args: TadaFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tada[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tada",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Tada, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tada",
    action: "read",
    possession: "own",
  })
  async tada(
    @graphql.Args() args: TadaFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tada | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Tada",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Tada)
  @nestAccessControl.UseRoles({
    resource: "Tada",
    action: "delete",
    possession: "any",
  })
  async deleteTada(@graphql.Args() args: DeleteTadaArgs): Promise<Tada | null> {
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

  @graphql.ResolveField(() => [BlaBla])
  @nestAccessControl.UseRoles({
    resource: "Tada",
    action: "read",
    possession: "any",
  })
  async blaBlas(
    @graphql.Parent() parent: Tada,
    @graphql.Args() args: BlaBlaFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "BlaBla",
    });
    const results = await this.service.findBlaBlas(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
