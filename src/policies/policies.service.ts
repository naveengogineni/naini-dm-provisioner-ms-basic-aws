import { Injectable } from "@nestjs/common";
import { Iot } from "aws-sdk";

@Injectable()
export class PolicyService {

    iot = new Iot({
        credentials: {
            accessKeyId: 'AKIAUTX6BDY45I7HWU5O',
            secretAccessKey: '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',
        },
        region: 'ap-northeast-1'
        });

    async policies() {
        var params = {}
        try {
            let data = (await this.iot.listPolicies(params).promise());
            return { data: data};
        } catch (error) {
            return {error: error}
        }
    }

    async attachedPolicies(targetARN: string) {
        var params = {
            target: targetARN,
        };
        try {
            let data = (await this.iot.listAttachedPolicies(params).promise());
            return { data: data};
        } catch (error) {
            return {error: error}
        }
    }

    async create(body) {
        return {'msg': 'Policy created'}
    }
    
}