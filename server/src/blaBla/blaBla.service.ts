import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BlaBlaServiceBase } from "./base/blaBla.service.base";

@Injectable()
export class BlaBlaService extends BlaBlaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
