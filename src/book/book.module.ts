import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookSchema } from "./book.model";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { CategoryService } from "src/category/category.service";
import { CategoryModule } from "src/category/category.module";



@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Book", schema: BookSchema, collection: "book" }
        ]),
        CategoryModule
    ],
    providers: [BookService],
    controllers: [BookController],
    exports: []
})

export class BookModule { }