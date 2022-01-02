import { PrismaService } from "nestjs-prisma";
import { Prisma, Tada, BlaBla, User } from "@prisma/client";

export class TadaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TadaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TadaFindManyArgs>
  ): Promise<number> {
    return this.prisma.tada.count(args);
  }

  async findMany<T extends Prisma.TadaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TadaFindManyArgs>
  ): Promise<Tada[]> {
    return this.prisma.tada.findMany(args);
  }
  async findOne<T extends Prisma.TadaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TadaFindUniqueArgs>
  ): Promise<Tada | null> {
    return this.prisma.tada.findUnique(args);
  }
  async create<T extends Prisma.TadaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TadaCreateArgs>
  ): Promise<Tada> {
    return this.prisma.tada.create<T>(args);
  }
  async update<T extends Prisma.TadaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TadaUpdateArgs>
  ): Promise<Tada> {
    return this.prisma.tada.update<T>(args);
  }
  async delete<T extends Prisma.TadaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TadaDeleteArgs>
  ): Promise<Tada> {
    return this.prisma.tada.delete(args);
  }

  async findBlaBlas(
    parentId: string,
    args: Prisma.BlaBlaFindManyArgs
  ): Promise<BlaBla[]> {
    return this.prisma.tada
      .findUnique({
        where: { id: parentId },
      })
      .blaBlas(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.tada
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }
}
