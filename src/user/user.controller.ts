import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
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
    findOneUserByIdController(@Param('id') id: string): Promise<IUser> {
        return this.userService.findOneUserByIdService(id);
    }

    @Post()
    createAUserController(@Body() user: IUser): Promise<IUser> {
        return this.userService.createAUserService(user);
    }

    @Put('/:id')
    updateAUserController(@Param('id') id: string, @Body() user: IUser): Promise<IUser> {
        return this.userService.upadateAUserService(id, user);
    }

    @Delete('/:id')
    deleteAUserController(@Param('id') id: any): Promise<any> {
        return this.userService.deleteAUserService(id);
    }
}