import { Injectable } from "@nestjs/common";
import { Iot } from 'aws-sdk';
import { createThingDto } from "src/dto/things.dto";

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
      return data
    } catch (error) {
      return error
    }
    
  }

  async create(createThingDto: createThingDto) {
    console.log(createThingDto);

    try {
      let data = (await this.iot.createThing(createThingDto).promise());
      return data
    } catch(error) {
      return error
    }
  }

}