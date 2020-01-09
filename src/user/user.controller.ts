import { Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { IUser } from "./user.model";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    findAllUsersController(): Promise<IUser[]> {
        return this.userService.findAllUsersService();
    }

    @Get('/:id')
    findOneUserByIdController(id: string): Promise<IUser> {
        return this.userService.findOneUserByIdService(id);
    }

    @Post()
    createAUserController(user: IUser): Promise<IUser> {
        return this.userService.createAUserService(user);
    }

    @Put('/:id')
    updateAUserController(id: string, user: IUser): Promise<IUser> {
        return this.userService.upadateAUserService(id, user);
    }

    @Delete('/:id')
    deleteAUserController(id: string): Promise<any> {
        return this.userService.deleteAUserService(id);
    }
}