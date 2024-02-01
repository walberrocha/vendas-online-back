import { Controller, Get } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
    constructor(
        private readonly stateService: CityService,
    ){}

    @Get()
    async getAllCities(): Promise<CityEntity[]> {
        return this.stateService.getAllCities();
    }
}
