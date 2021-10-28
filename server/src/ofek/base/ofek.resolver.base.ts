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
import { DeleteOfekArgs } from "./DeleteOfekArgs";
import { OfekFindManyArgs } from "./OfekFindManyArgs";
import { OfekFindUniqueArgs } from "./OfekFindUniqueArgs";
import { Ofek } from "./Ofek";
import { OfekService } from "../ofek.service";

@graphql.Resolver(() => Ofek)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OfekResolverBase {
  constructor(
    protected readonly service: OfekService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ofek",
    action: "read",
    possession: "any",
  })
  async _ofeksMeta(
    @graphql.Args() args: OfekFindManyArgs
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

  @graphql.Query(() => [Ofek])
  @nestAccessControl.UseRoles({
    resource: "Ofek",
    action: "read",
    possession: "any",
  })
  async ofeks(
    @graphql.Args() args: OfekFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ofek[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Ofek",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Ofek, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ofek",
    action: "read",
    possession: "own",
  })
  async ofek(
    @graphql.Args() args: OfekFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ofek | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Ofek",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Ofek)
  @nestAccessControl.UseRoles({
    resource: "Ofek",
    action: "delete",
    possession: "any",
  })
  async deleteOfek(@graphql.Args() args: DeleteOfekArgs): Promise<Ofek | null> {
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
}
