import { Module } from '@nestjs/common';
import { ThingModule } from './thing/thing.module';
import { PolicyModule } from './policy/policy.module';

@Module({
  imports: [ThingModule, PolicyModule],
})
export class AppModule {}
