import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FhgsdServiceBase } from "./base/fhgsd.service.base";

@Injectable()
export class FhgsdService extends FhgsdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
