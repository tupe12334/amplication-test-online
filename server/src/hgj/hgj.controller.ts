import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HgjService } from "./hgj.service";
import { HgjControllerBase } from "./base/hgj.controller.base";

@swagger.ApiTags("hgjs")
@common.Controller("hgjs")
export class HgjController extends HgjControllerBase {
  constructor(
    protected readonly service: HgjService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
