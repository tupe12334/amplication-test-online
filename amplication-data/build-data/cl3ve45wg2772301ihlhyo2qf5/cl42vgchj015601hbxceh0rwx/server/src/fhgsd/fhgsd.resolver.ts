import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FhgsdResolverBase } from "./base/fhgsd.resolver.base";
import { Fhgsd } from "./base/Fhgsd";
import { FhgsdService } from "./fhgsd.service";

@graphql.Resolver(() => Fhgsd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FhgsdResolver extends FhgsdResolverBase {
  constructor(
    protected readonly service: FhgsdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
