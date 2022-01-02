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
import { CreateBlaBlaArgs } from "./CreateBlaBlaArgs";
import { UpdateBlaBlaArgs } from "./UpdateBlaBlaArgs";
import { DeleteBlaBlaArgs } from "./DeleteBlaBlaArgs";
import { BlaBlaFindManyArgs } from "./BlaBlaFindManyArgs";
import { BlaBlaFindUniqueArgs } from "./BlaBlaFindUniqueArgs";
import { BlaBla } from "./BlaBla";
import { Tada } from "../../tada/base/Tada";
import { BlaBlaService } from "../blaBla.service";

@graphql.Resolver(() => BlaBla)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlaBlaResolverBase {
  constructor(
    protected readonly service: BlaBlaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "any",
  })
  async _blaBlasMeta(
    @graphql.Args() args: BlaBlaFindManyArgs
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

  @graphql.Query(() => [BlaBla])
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "any",
  })
  async blaBlas(
    @graphql.Args() args: BlaBlaFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "BlaBla",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => BlaBla, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "own",
  })
  async blaBla(
    @graphql.Args() args: BlaBlaFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "BlaBla",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => BlaBla)
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "create",
    possession: "any",
  })
  async createBlaBla(
    @graphql.Args() args: CreateBlaBlaArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "BlaBla",
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
        `providing the properties: ${properties} on ${"BlaBla"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        tada: args.data.tada
          ? {
              connect: args.data.tada,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => BlaBla)
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "update",
    possession: "any",
  })
  async updateBlaBla(
    @graphql.Args() args: UpdateBlaBlaArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "BlaBla",
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
        `providing the properties: ${properties} on ${"BlaBla"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          tada: args.data.tada
            ? {
                connect: args.data.tada,
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

  @graphql.Mutation(() => BlaBla)
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "delete",
    possession: "any",
  })
  async deleteBlaBla(
    @graphql.Args() args: DeleteBlaBlaArgs
  ): Promise<BlaBla | null> {
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

  @graphql.ResolveField(() => Tada, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "any",
  })
  async tada(
    @graphql.Parent() parent: BlaBla,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tada | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tada",
    });
    const result = await this.service.getTada(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
