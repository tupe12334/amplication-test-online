import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HgjServiceBase } from "./base/hgj.service.base";

@Injectable()
export class HgjService extends HgjServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
