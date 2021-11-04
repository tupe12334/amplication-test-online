import { PrismaService } from "nestjs-prisma";
import { Prisma, Ofek } from "@prisma/client";

export class OfekServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OfekFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfekFindManyArgs>
  ): Promise<number> {
    return this.prisma.ofek.count(args);
  }

  async findMany<T extends Prisma.OfekFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfekFindManyArgs>
  ): Promise<Ofek[]> {
    return this.prisma.ofek.findMany(args);
  }
  async findOne<T extends Prisma.OfekFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfekFindUniqueArgs>
  ): Promise<Ofek | null> {
    return this.prisma.ofek.findUnique(args);
  }
  async create<T extends Prisma.OfekCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfekCreateArgs>
  ): Promise<Ofek> {
    return this.prisma.ofek.create<T>(args);
  }
  async update<T extends Prisma.OfekUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfekUpdateArgs>
  ): Promise<Ofek> {
    return this.prisma.ofek.update<T>(args);
  }
  async delete<T extends Prisma.OfekDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfekDeleteArgs>
  ): Promise<Ofek> {
    return this.prisma.ofek.delete(args);
  }
}
