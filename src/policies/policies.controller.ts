import { Controller, Get } from "@nestjs/common";
import { PolicyService } from "./policies.service";

@Controller('policies')
export class PolicyController {
    constructor(private policyService: PolicyService) {}

    @Get()
    async policies() {
        return await this.policyService.policies();
    }
}