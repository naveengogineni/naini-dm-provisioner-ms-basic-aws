import { Controller, Get } from "@nestjs/common";
import { PolicyService } from "./policy.service";

@Controller('policies')
export class PolicyController {
    constructor(private policyService: PolicyService) {}

    @Get()
    policies() {
        return this.policyService.policies();
    }
}