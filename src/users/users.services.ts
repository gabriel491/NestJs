import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-users.dto";

global.users = ['XABLAU'];

@Injectable()
export class usersService{
    findAll(): any[]{
        return global.users;
    }
    create (users: CreateUserDto) {
        global.users.push(users);
    }
}