import { Injectable } from "@nestjs/common";
import { Iot } from 'aws-sdk';

@Injectable()
export class ThingService {

  iot = new Iot({
    credentials: {
      accessKeyId: 'AKIAUTX6BDY4UWLU3ZUF',
      secretAccessKey: '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',
    },
    region: 'ap-northeast-1'
  });

  async things() {

    var params = {
      nextToken: null,
      maxResults: 10,
    };

    try {
      let data = (await this.iot.listThings(params).promise());
      return { data: data};
    } catch (error) {
      return {error: error}
    }

  }
}