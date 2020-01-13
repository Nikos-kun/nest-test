import { AuthorService } from "./author.service";
import { Get, Post, Put, Delete, Controller, Param, Body } from "@nestjs/common";
import { IAuthor } from "./author.model";

@Controller('controller')
export class AuthorController {
    constructor(
        private readonly authorService: AuthorService
    ) { }

    @Get()
    findAllAuthorsController(): Promise<IAuthor[]> {
        return this.authorService.findAllAuthorsService();
    }




    @Get('/:id')
    findOneAuthorByIdController(@Param('id') id: string): Promise<IAuthor> {
        return this.authorService.findOneAuthorByIdService(id);
    }




    @Post()
    createAuthorController(@Body() author: IAuthor): Promise<IAuthor> {
        return this.authorService.createAnAuthorService(author);
    }




    @Put('/:id')
    updateAuthorController(@Param('id') id: string, @Body() author: IAuthor): Promise<IAuthor> {
        return this.authorService.updateAuthorService(id, author);
    }




    @Delete('/:id')

    deleteAuthorController(@Param('id') id: string): Promise<IAuthor> {
        return this.authorService.deleteAuthorService(id);
    }
}