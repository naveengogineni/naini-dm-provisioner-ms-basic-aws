import { Module } from "@nestjs/common";
import { ThingController } from "./things.contoller";
import { ThingService } from "./things.service";

@Module({
    controllers: [ThingController],
    providers: [ThingService],
})
export class ThingModule {}