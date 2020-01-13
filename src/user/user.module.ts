import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./user.model";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "User", schema: UserSchema, collection: "user" }
    ])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: []
})
export class UserModule { }
