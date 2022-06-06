import { Module } from "@nestjs/common";
import { FhgsdModuleBase } from "./base/fhgsd.module.base";
import { FhgsdService } from "./fhgsd.service";
import { FhgsdController } from "./fhgsd.controller";
import { FhgsdResolver } from "./fhgsd.resolver";

@Module({
  imports: [FhgsdModuleBase],
  controllers: [FhgsdController],
  providers: [FhgsdService, FhgsdResolver],
  exports: [FhgsdService],
})
export class FhgsdModule {}
