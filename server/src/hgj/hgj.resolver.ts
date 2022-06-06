import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HgjResolverBase } from "./base/hgj.resolver.base";
import { Hgj } from "./base/Hgj";
import { HgjService } from "./hgj.service";

@graphql.Resolver(() => Hgj)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HgjResolver extends HgjResolverBase {
  constructor(
    protected readonly service: HgjService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
