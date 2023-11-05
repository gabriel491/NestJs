import { Module } from "@nestjs/common";
import { usersService } from "./users.services";
import { UsersController } from "./users.controller";

@Module({
    imports: [],
    providers: [usersService],
    controllers: [UsersController]
})
export class UsersModule {}
