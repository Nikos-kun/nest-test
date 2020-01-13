import * as mongoose from 'mongoose';
import { ICategory } from 'src/category/category.model';

export interface IBook extends mongoose.Document {
    title: string
    author: string
    publisher: string
    releaseDate: Date
    category: EBookCategory
    createdAt: Date
    lastUpdate: Date
    lastLoggedAt: Date
}

export enum EBookCategory {
    EPIC = 'EPIC',
    HORROR = 'HORROR',
    COMMEDY = 'COMMEDY'
}




export const BookSchema = new mongoose.Schema({

    title: { type: String, required: true },

    author: { type: String, required: true },

    publisher: { type: String, required: true },

    releaseDate: Date,

    category: {
        type: Array<ICategory>()
    },

    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },

    lastUpdate: {
        type: Date,
        required: true,
        default: new Date()
    },

})