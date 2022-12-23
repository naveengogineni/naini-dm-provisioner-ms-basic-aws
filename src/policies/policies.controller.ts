import { Controller, Get, Param } from "@nestjs/common";
import { PolicyService } from "./policies.service";

@Controller('policies')
export class PolicyController {
    constructor(private policyService: PolicyService) {}

    @Get()
    async policies() {
        return await this.policyService.policies();
    }

    @Get(':targetARN')
    async attachedPolicies(@Param('targetARN') targetARN: string) {
        return await this.policyService.attachedPolicies(targetARN);
    }
}