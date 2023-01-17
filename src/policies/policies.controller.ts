import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PolicyService } from "./policies.service";

@Controller('policies')
export class PolicyController {
    constructor(private policyService: PolicyService) {}

    @Get()
    async policies() {
        return await this.policyService.policies();
    }

    @Get('attached')
    async attachedPolicies(@Query('targetARN') targetARN: string) {
        return await this.policyService.attachedPolicies(targetARN);
    }

    @Post()
    async create(@Body() body: any) {
        return await this.policyService.create(body);
    }
}