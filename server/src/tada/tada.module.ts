import { Module } from "@nestjs/common";
import { TadaModuleBase } from "./base/tada.module.base";
import { TadaService } from "./tada.service";
import { TadaController } from "./tada.controller";
import { TadaResolver } from "./tada.resolver";

@Module({
  imports: [TadaModuleBase],
  controllers: [TadaController],
  providers: [TadaService, TadaResolver],
  exports: [TadaService],
})
export class TadaModule {}
