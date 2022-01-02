import { Module } from "@nestjs/common";
import { BlaBlaModuleBase } from "./base/blaBla.module.base";
import { BlaBlaService } from "./blaBla.service";
import { BlaBlaController } from "./blaBla.controller";
import { BlaBlaResolver } from "./blaBla.resolver";

@Module({
  imports: [BlaBlaModuleBase],
  controllers: [BlaBlaController],
  providers: [BlaBlaService, BlaBlaResolver],
  exports: [BlaBlaService],
})
export class BlaBlaModule {}
