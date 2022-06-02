import { Module } from "@nestjs/common";
import { FgdModuleBase } from "./base/fgd.module.base";
import { FgdService } from "./fgd.service";
import { FgdController } from "./fgd.controller";
import { FgdResolver } from "./fgd.resolver";

@Module({
  imports: [FgdModuleBase],
  controllers: [FgdController],
  providers: [FgdService, FgdResolver],
  exports: [FgdService],
})
export class FgdModule {}
