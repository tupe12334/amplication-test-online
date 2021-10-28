import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OfekServiceBase } from "./base/ofek.service.base";

@Injectable()
export class OfekService extends OfekServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
