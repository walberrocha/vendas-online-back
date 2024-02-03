import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { UserModule } from 'src/user/user.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [
    UserModule,
    CityModule,
    TypeOrmModule.forFeature([AddressEntity])],
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule { }
