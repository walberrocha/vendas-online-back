import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
        private readonly userService: UserService,
        private readonly cityService: CityService,
    ) {}

    async createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AddressEntity> {
        const user = await this.userService.findUserById(userId);
        console.log(user);
        const city = await this.cityService.findCityById(createAddressDto.cityId);
        console.log(city);
        return this.addressRepository.save({
            ...createAddressDto,
            userId,
        });
    }
}
