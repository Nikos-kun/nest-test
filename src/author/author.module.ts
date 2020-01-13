import { Module } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { AuthorController } from "./author.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthorSchema } from "./author.model";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Author", schema: AuthorSchema, collection: "author" }
        ])
    ],
    providers: [AuthorService],
    controllers: [AuthorController],
    exports: []
})
export class AuthorModule { }
