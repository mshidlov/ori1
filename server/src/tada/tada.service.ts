import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TadaServiceBase } from "./base/tada.service.base";

@Injectable()
export class TadaService extends TadaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
