import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FhgsdService } from "./fhgsd.service";
import { FhgsdControllerBase } from "./base/fhgsd.controller.base";

@swagger.ApiTags("fhgsds")
@common.Controller("fhgsds")
export class FhgsdController extends FhgsdControllerBase {
  constructor(
    protected readonly service: FhgsdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
