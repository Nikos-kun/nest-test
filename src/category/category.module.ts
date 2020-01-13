import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { CategorySchema } from "./category.model";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";


@Module({

    imports: [
        MongooseModule.forFeature([
            { name: "Category", schema: CategorySchema, collection: "category" }
        ])
    ],
    providers: [CategoryService],
    controllers: [CategoryController],
    exports: [
        CategoryService
    ]


})
export class CategoryModule { }