import { CategoryService } from "./category.service";
import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { ICategory } from "./category.model";

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) { }


    @Get()
    findAllCategoriesController(): Promise<ICategory[]> {
        return this.categoryService.findAllCategoriesService();
    }




    @Get('/:id')
    findOneCategorybyIdcontroller(@Param('id') id: string): Promise<ICategory> {
        return this.categoryService.findOneCategoryByIdService(id);
    }




    @Post()
    createOneCategoryController(@Body() category: ICategory): Promise<ICategory> {
        return this.categoryService.createOneCategoryService(category);
    }




    @Put('/:id')
    updateCategoryController(@Param('id') id: string, category: ICategory): Promise<ICategory> {

        return this.categoryService.updateCategoryService(id, category);
    }




    @Delete('/:id')
    deleteOneCategoryController(@Param('id') id: string): Promise<ICategory> {
        return this.categoryService.deleteCategoryService(id);
    }
}