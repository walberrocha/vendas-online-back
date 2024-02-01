import { Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityEntityRepository: Repository<CityEntity>, 
    ) {}

    getAllCities(): Promise<CityEntity[]> {
        return this.cityEntityRepository.find();
    }
}
