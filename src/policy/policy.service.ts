import { Injectable } from "@nestjs/common";

@Injectable()
export class PolicyService {
    policies() {
        return {'msg': 'Policies list from AWS'}
    }
}