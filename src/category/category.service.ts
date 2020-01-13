import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICategory } from "./category.model";

@Injectable()
export class CategoryService {
    private readonly logger: Logger = new Logger(CategoryService.name)
    constructor(
        @InjectModel('Category')
        private readonly categoryModel: Model<ICategory>
    ) { }


    async findAllCategoriesService(): Promise<ICategory[]> {
        this.logger.log('try to find all categories...');
        return await this.categoryModel.find().exec();
    }

    async findOneCategoryByIdService(id: string): Promise<ICategory> {
        this.logger.log('try to find one category by id...');
        return await this.categoryModel.findById(id).exec();
    }

    async findOneCategoryByNameService(categoryName: string): Promise<ICategory[]> {
        this.logger.log('try to find one category by its name...');
        return await this.categoryModel.find({ categoryName: categoryName })
    }

    async createOneCategoryService(category: ICategory): Promise<ICategory> {
        this.logger.log('try to create e new category...');
        const newCategory = new this.categoryModel(category);
        newCategory.save();
        return newCategory
    }

    async updateCategoryService(id: string, category: ICategory): Promise<ICategory> {
        this.logger.log('try to update one category');

        let oldCategoryFromDb = await this.categoryModel.findById(id).exec();
        let newCategoryFromFront = category

        oldCategoryFromDb.categoryName = newCategoryFromFront.categoryName
        oldCategoryFromDb.bookArray = newCategoryFromFront.bookArray


        oldCategoryFromDb.lastUpdated = new Date()
        oldCategoryFromDb.save()
        return oldCategoryFromDb
    }


    async deleteCategoryService(id: string): Promise<any> {
        this.logger.log('try to delete a category...');

        let messageOfSuccess = 'success'
        let messageOfError = 'Error'
        let categoryToBeDeleted = await this.categoryModel.findById(id).exec();

        if (categoryToBeDeleted) {
            categoryToBeDeleted.remove()
            return messageOfSuccess
        } else {
            return messageOfError
        }
    }
}