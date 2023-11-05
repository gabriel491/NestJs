import { Body, Controller, Get, Post } from "@nestjs/common";
import { usersService } from "./users.services";
import { CreateUserDto } from "./dtos/create-users.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: usersService) {}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() users: CreateUserDto){
        return this.usersService.create(users);
    }
}