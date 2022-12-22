import { Controller, Get } from '@nestjs/common';
import { CertificateService } from './certificates.service';

@Controller('certificates')
export class CertificateController {
    constructor(private certificateService: CertificateService) {}

    @Get()
    async certificates() {
        return await this.certificateService.certificates();
    }

}
