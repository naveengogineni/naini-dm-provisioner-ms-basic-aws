import { Module } from '@nestjs/common';
import { ThingModule } from './things/things.module';
import { PolicyModule } from './policies/policies.module';
import { CertificateModule } from './certificates/certificates.module';

@Module({
  imports: [ThingModule, PolicyModule, CertificateModule],
})
export class AppModule {}
