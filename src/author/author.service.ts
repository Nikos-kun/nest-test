import { Logger, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IAuthor } from "./author.model";
import { Model } from "mongoose";

@Injectable()
export class AuthorService {
    private readonly logger: Logger = new Logger(AuthorService.name)
    constructor(
        @InjectModel('Author')
        private readonly authorModel: Model<IAuthor>
    ) { }

    async findAllAuthorsService(): Promise<IAuthor[]> {
        this.logger.log('try to find all authors...');
        return await this.authorModel.find().exec();
    }

    async findOneAuthorByIdService(id: string): Promise<IAuthor> {
        this.logger.log('try to find one author by id...');
        return await this.authorModel.findById(id).exec();
    }

    async createAnAuthorService(author: IAuthor): Promise<IAuthor> {
        this.logger.log('try to create a new author...')
        const newAuthor = new this.authorModel(author);
        newAuthor.save();
        return await newAuthor
    }

    async updateAuthorService(id: string, author: IAuthor): Promise<IAuthor> {
        this.logger.log('try to update an author');

        let oldAuthorFromDb = await this.authorModel.findById(id).exec();
        let newAuthorFromFront = author

        oldAuthorFromDb.firstName = newAuthorFromFront.firstName
        oldAuthorFromDb.lastName = newAuthorFromFront.lastName
        oldAuthorFromDb.bibliography = newAuthorFromFront.bibliography


        oldAuthorFromDb.lastUpdated = new Date()
        oldAuthorFromDb.save()
        return oldAuthorFromDb
    }

    async deleteAuthorService(id: any): Promise<any> {
        this.logger.log('try to delete an author...');

        let messageOfSuccess = 'Success'
        let messageOfError = 'Error'
        let authorToBedeleted = await this.authorModel.findById(id).exec();

        if (authorToBedeleted) {
            authorToBedeleted.remove()
            return messageOfSuccess
        } else {
            return messageOfError
        }

    }

}