import { Module } from "@nestjs/common";
import { HgjModuleBase } from "./base/hgj.module.base";
import { HgjService } from "./hgj.service";
import { HgjController } from "./hgj.controller";
import { HgjResolver } from "./hgj.resolver";

@Module({
  imports: [HgjModuleBase],
  controllers: [HgjController],
  providers: [HgjService, HgjResolver],
  exports: [HgjService],
})
export class HgjModule {}
