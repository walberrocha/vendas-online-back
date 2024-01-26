import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDtos } from './dtos/createUser.dtos';

@Controller('user')
export class UserController {
    @Post()
    async createUser(
        @Body() createUser: CreateUserDtos,
    ) {
        return {
            ...createUser,
            password: undefined,
        }
    }
}
