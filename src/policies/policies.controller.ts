import { Controller, Get, Query } from "@nestjs/common";
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
}