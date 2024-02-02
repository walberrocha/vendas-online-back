import { Controller, Get, Param } from '@nestjs/common';
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

    @Get('/:stateId')
    async getAllCitiesByStateId(@Param('stateId') stateId: number): Promise<CityEntity[]> {
        return this.stateService.getAllcitiesById(stateId);
    }
}
