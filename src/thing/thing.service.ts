import { Injectable } from "@nestjs/common";

@Injectable({})
export class ThingService {
    things() {
        return { 'msg': 'Things list from AWS' };
    }
}