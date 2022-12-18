import { Controller, Get } from "@nestjs/common";
import { ThingService } from "./thing.service";

@Controller('things')
export class ThingController {
    constructor(private thingService: ThingService) {}

    @Get()
    things() {
        return this.thingService.things();
    }
}