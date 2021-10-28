import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OfekService } from "./ofek.service";
import { OfekControllerBase } from "./base/ofek.controller.base";

@swagger.ApiTags("ofeks")
@common.Controller("ofeks")
export class OfekController extends OfekControllerBase {
  constructor(
    protected readonly service: OfekService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
