import { ReturnAddressDto } from "src/address/dtos/returnAddress.dto";
import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    addresses?: ReturnAddressDto[]; 
    
    constructor(userEnity: UserEntity) {
        this.id = userEnity.id;
        this.name = userEnity.name;
        this.email = userEnity.email;
        this.phone = userEnity.phone;
        this.cpf = userEnity.cpf;
        this.addresses = userEnity.addresses ? 
        userEnity.addresses.map((address) => new ReturnAddressDto(address)) 
        : undefined;
    }
}