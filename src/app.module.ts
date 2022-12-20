import { Module } from '@nestjs/common';
import { ThingModule } from './thing/thing.module';
import { PolicyModule } from './policy/policy.module';
import { CertificateController } from './certificate/certificate.controller';
import { CertificateService } from './certificate/certificate.service';
import { CertificateModule } from './certificate/certificate.module';

@Module({
  imports: [ThingModule, PolicyModule, CertificateModule],
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class AppModule {}
