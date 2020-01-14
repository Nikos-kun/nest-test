import * as mongoose from 'mongoose';
import { ICategory } from 'src/category/category.model';

export interface IBook extends mongoose.Document {
    title: string
    authorFirstName: string
    authorLastName: string
    publisher: string
    releaseDate: Date
    category: Array<ICategory>
    createdAt: Date
    lastUpdate: Date
    lastLoggedAt: Date
}





export const BookSchema = new mongoose.Schema({

    title: { type: String, required: true },

    authorFirstName: { type: String, required: true },

    authorLastName: { type: String, required: true },

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