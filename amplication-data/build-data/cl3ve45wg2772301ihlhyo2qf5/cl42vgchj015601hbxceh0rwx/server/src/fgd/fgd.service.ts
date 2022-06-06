import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FgdServiceBase } from "./base/fgd.service.base";

@Injectable()
export class FgdService extends FgdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
