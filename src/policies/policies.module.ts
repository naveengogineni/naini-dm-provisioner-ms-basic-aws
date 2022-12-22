import { Module } from '@nestjs/common';
import { PolicyController } from './policies.controller';
import { PolicyService } from './policies.service';

@Module({
    controllers: [PolicyController],
    providers: [PolicyService],
})
export class PolicyModule {}
