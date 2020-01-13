import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/library",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }),
    UserModule,
    BookModule,
    AuthorModule,
    CategoryModule
  ],

  controllers: [],

  providers: [],

})
export class AppModule { }
