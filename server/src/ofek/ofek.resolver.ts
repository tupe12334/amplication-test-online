import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OfekResolverBase } from "./base/ofek.resolver.base";
import { Ofek } from "./base/Ofek";
import { OfekService } from "./ofek.service";

@graphql.Resolver(() => Ofek)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OfekResolver extends OfekResolverBase {
  constructor(
    protected readonly service: OfekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
