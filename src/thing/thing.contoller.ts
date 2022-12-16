import { Controller, Get } from "@nestjs/common";
import { ThingService } from "./thing.service";

@Controller('thing')
export class ThingController {
    constructor(private thingService: ThingService) {}

    @Get('things')
    things() {
        return this.thingService.things();
    }
}