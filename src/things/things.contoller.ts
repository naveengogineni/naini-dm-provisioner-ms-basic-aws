import { Controller, Get, Param } from "@nestjs/common";
import { ThingService } from "./things.service";

@Controller('things')
export class ThingController {
    constructor(private thingService: ThingService) {}

    @Get()
    async things() {
        return await this.thingService.things();
    }

    @Get(':thingName')
    async thing(@Param('thingName') thingName: string) {
        return await this.thingService.thing(thingName);
    }
}