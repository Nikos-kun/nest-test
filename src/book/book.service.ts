import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IBook } from "./book.model";
import { Model } from 'mongoose';
import { ICategory } from "src/category/category.model";
import { IAuthor } from "src/author/author.model";

@Injectable()
export class BookService {
    private readonly logger: Logger = new Logger(BookService.name)

    constructor(
        @InjectModel('Book')
        private readonly bookModel: Model<IBook>,

        @InjectModel('Category')
        private readonly categoryModel: Model<ICategory>,

        @InjectModel('Author')
        private readonly authorModel: Model<IAuthor>
    ) { }

    async findAllBooksService(): Promise<IBook[]> {
        this.logger.log('Try to find all books...');
        return await this.bookModel.find().exec(); 0
    }

    async findOneBookByidService(id: string): Promise<IBook> {
        this.logger.log('try to find one book by id...');
        return await this.bookModel.findById(id).exec(); 0
    }


    async createABookService(book: IBook): Promise<IBook> {
        this.logger.log('Try to crete a new book...');

        const newBook = new this.bookModel(book);

        // -----------------------------------------------------------------------------------------


        let categoryNameDenExeiSimasia = newBook.category[0].toString()

        let foundCategory = await this.categoryModel.find({ categoryName: categoryNameDenExeiSimasia })

        foundCategory[0].bookArray.push(newBook)

        foundCategory[0].save()


        // -----------------------------------------------------------------------------------------


        let authorsLastNameDenExeiSimasia = newBook.authorLastName

        let foundAuthor = await this.authorModel.find({ lastName: authorsLastNameDenExeiSimasia })

        foundAuthor[0].bibliography.push(newBook)

        foundAuthor[0].save()


        // ----------------------------------------------------------------------------------------

        newBook.save();

        return newBook
    }


    async updateABookservice(id: string, book: IBook): Promise<IBook> {
        this.logger.log('try to update a book...');

        let oldBookFromDb = await this.bookModel.findById(id).exec();
        let newBookFromFront = book

        oldBookFromDb.title = newBookFromFront.title
        oldBookFromDb.authorFirstName = newBookFromFront.authorFirstName
        oldBookFromDb.authorLastName = newBookFromFront.authorLastName
        oldBookFromDb.publisher = newBookFromFront.publisher
        oldBookFromDb.releaseDate = newBookFromFront.releaseDate
        oldBookFromDb.category = newBookFromFront.category

        oldBookFromDb.lastUpdate = new Date()
        oldBookFromDb.save()
        return oldBookFromDb
    }



    async deleteABookService(id: any): Promise<any> {
        this.logger.log('try ti delete a book...');
        let messageOfSuccess = 'success'
        let messageOfError = 'Error'
        let bookToBeDeleted = await this.bookModel.findById(id).exec();

        if (bookToBeDeleted) {
            bookToBeDeleted.remove()
            return messageOfSuccess
        } else {
            return messageOfError
        }
    }
}