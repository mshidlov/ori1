import { PrismaService } from "nestjs-prisma";
import { Prisma, BlaBla, Tada } from "@prisma/client";

export class BlaBlaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BlaBlaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlaBlaFindManyArgs>
  ): Promise<number> {
    return this.prisma.blaBla.count(args);
  }

  async findMany<T extends Prisma.BlaBlaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlaBlaFindManyArgs>
  ): Promise<BlaBla[]> {
    return this.prisma.blaBla.findMany(args);
  }
  async findOne<T extends Prisma.BlaBlaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlaBlaFindUniqueArgs>
  ): Promise<BlaBla | null> {
    return this.prisma.blaBla.findUnique(args);
  }
  async create<T extends Prisma.BlaBlaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlaBlaCreateArgs>
  ): Promise<BlaBla> {
    return this.prisma.blaBla.create<T>(args);
  }
  async update<T extends Prisma.BlaBlaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlaBlaUpdateArgs>
  ): Promise<BlaBla> {
    return this.prisma.blaBla.update<T>(args);
  }
  async delete<T extends Prisma.BlaBlaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlaBlaDeleteArgs>
  ): Promise<BlaBla> {
    return this.prisma.blaBla.delete(args);
  }

  async getTada(parentId: string): Promise<Tada | null> {
    return this.prisma.blaBla
      .findUnique({
        where: { id: parentId },
      })
      .tada();
  }
}
