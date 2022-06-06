import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FgdResolverBase } from "./base/fgd.resolver.base";
import { Fgd } from "./base/Fgd";
import { FgdService } from "./fgd.service";

@graphql.Resolver(() => Fgd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FgdResolver extends FgdResolverBase {
  constructor(
    protected readonly service: FgdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
