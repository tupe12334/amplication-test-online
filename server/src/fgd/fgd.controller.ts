import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FgdService } from "./fgd.service";
import { FgdControllerBase } from "./base/fgd.controller.base";

@swagger.ApiTags("fgds")
@common.Controller("fgds")
export class FgdController extends FgdControllerBase {
  constructor(
    protected readonly service: FgdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
