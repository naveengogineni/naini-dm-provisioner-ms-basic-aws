import { Injectable } from "@nestjs/common";
import { Iot } from "aws-sdk";

@Injectable()
export class PolicyService {

    iot = new Iot({
        credentials: {
            accessKeyId: 'AKIAUTX6BDY4UWLU3ZUF',
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
    
}