import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookSchema } from "./book.model";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { CategoryModule } from "../category/category.module";
import { AuthorModule } from "../author/author.module";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Book", schema: BookSchema, collection: "book" }
        ]),
        CategoryModule,
        AuthorModule
    ],
    providers: [BookService],
    controllers: [BookController],
    exports: []
})

export class BookModule { }