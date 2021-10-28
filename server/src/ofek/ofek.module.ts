import { Module } from "@nestjs/common";
import { OfekModuleBase } from "./base/ofek.module.base";
import { OfekService } from "./ofek.service";
import { OfekController } from "./ofek.controller";
import { OfekResolver } from "./ofek.resolver";

@Module({
  imports: [OfekModuleBase],
  controllers: [OfekController],
  providers: [OfekService, OfekResolver],
  exports: [OfekService],
})
export class OfekModule {}
