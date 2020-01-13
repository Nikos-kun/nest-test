import * as mongoose from 'mongoose';
import { IBook } from 'src/book/book.model';


export interface ICategory extends mongoose.Document {

    categoryName: string
    bookArray: Array<IBook>
    createdAt: Date
    lastUpdated: Date

}



export const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true,
        index: true
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

    bookArray: Array<IBook>()

})