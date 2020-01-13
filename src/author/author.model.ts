import * as  mongoose from 'mongoose';
import { IBook } from 'src/book/book.model';

export interface IAuthor extends mongoose.Document {
    firstName: string
    lastName: string
    bibliography: Array<IBook>
    lastUpdated: Date
    lastLoggedAt: Date

}

export const AuthorSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        index: true
    },

    lastName: {
        type: String,
        required: true,
        index: true
    },

    bibliography: {
        type: Array<any>()
    },

    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: new Date()
    },

})