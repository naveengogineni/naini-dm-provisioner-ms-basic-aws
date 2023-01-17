import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { createThingDto } from "src/dto/things.dto";
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

    @Post()
    async create(@Body() createThingDto: createThingDto) {
        return await this.thingService.create(createThingDto);
    }
}