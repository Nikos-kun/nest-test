import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { BookService } from "./book.service";
import { IBook } from "./book.model";

@Controller('book')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ) { }

    @Get()
    findOneBookbyIdController(): Promise<IBook[]> {
        return this.bookService.findAllBooksService();
    }



    @Get('/:id')
    findOneBookByIdController(@Param('id') id: string): Promise<IBook> {
        return this.bookService.findOneBookByidService(id);
    }



    @Post()
    createABookController(@Body() book: IBook): Promise<IBook> {
        return this.bookService.createABookService(book);
    }



    @Put('/:id')
    updateABookController(@Param('id') id: string, @Body() book: IBook): Promise<IBook> {
        return this.bookService.updateABookservice(id, book);
    }



    @Delete('/:id')
    deleteABookController(@Param('id') id: string): Promise<any> {
        return this.bookService.deleteABookService(id);
    }

}