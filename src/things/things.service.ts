import { Injectable } from "@nestjs/common";
import { Iot } from 'aws-sdk';

@Injectable()
export class ThingService {

  iot = new Iot({
    credentials: {
      accessKeyId: 'AKIAUTX6BDY45I7HWU5O',
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

  async thing(thingName: string) {

    var params = {
      thingName: thingName,
    };

    try {
      let data = (await this.iot.describeThing(params).promise());
      return {data: data}
    } catch (error) {
      return {error: error}
    }
    
  }

  async create(body) {
    console.log(body);

    try {
      let data = (await this.iot.createThing(body).promise());
      return {data: data}
    } catch(error) {
      return {error: error}
    }
  }

}