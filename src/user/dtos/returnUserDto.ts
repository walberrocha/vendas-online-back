import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    
    constructor(userEnity: UserEntity) {
        this.id = userEnity.id;
        this.name = userEnity.name;
        this.email = userEnity.email;
        this.phone = userEnity.phone;
        this.cpf = userEnity.cpf;
    }
}