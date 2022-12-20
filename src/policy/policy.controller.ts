import { Controller, Get } from "@nestjs/common";
import { PolicyService } from "./policy.service";

@Controller('policies')
export class PolicyController {
    constructor(private policyService: PolicyService) {}

    @Get()
    async policies() {
        return await this.policyService.policies();
    }
}