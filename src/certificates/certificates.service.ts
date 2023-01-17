import { Injectable } from '@nestjs/common';
import { Iot } from 'aws-sdk';

@Injectable()
export class CertificateService {
    iot = new Iot({
        credentials: {
            accessKeyId: 'AKIAUTX6BDY45I7HWU5O',
            secretAccessKey: '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',
        },
        region: 'ap-northeast-1'
        });

    async certificates() {

    var params = {
        
    };

    try {
        let data = (await this.iot.listCertificates(params).promise());
        return { data: data};
    } catch (error) {
        return {error: error}
    }

    }

    async create(body) {
        return {'msg': 'Certificate created'}
    }
}
