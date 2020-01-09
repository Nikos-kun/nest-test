import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IUser } from "./user.model";
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    // Η γραμμή που ακολουθεί κάνει κάτι πολύ σημαντικό, μην ανυσηχείς αν δεν την καταλαβαίνεις από τώρα.
    private readonly logger: Logger = new Logger(UserService.name)

    // Ακολουθεί ο constructor ο οποίος βοηθά το service να δημιουργήσει ένα object.
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<IUser>
    ) { }

    // Και τώρα ξεκινάνε όλες οι εντολές που εκτελεί το service.
    // Σε μια πρώιμη μορφή, ενός απλού app, το παραπάνω σημαίνει απλώς την εκτέλεση ενός CRUD.


    // Δώσε προσοχή στο ότι δεν αμελώ ποτέ να χρησιμοποιήσω Async/await καθώς και Promises.

    async findAllUsersService(): Promise<IUser[]> {
        this.logger.log('Try to find all users...');
        return await this.userModel.find().exec();
    }

    async findOneUserByIdService(id: string): Promise<IUser> {
        this.logger.log('Try to find one user by id...');
        return await this.userModel.findById(id).exec();
    }

    async createAUserService(user: IUser): Promise<IUser> {
        this.logger.log('Try to create a new user...');

        // Στην επόμενη γραμμή δημιουργήθηκε ένα νέος user, καθ' εικόνα του "interface user" που είχαμε φτιάξει στο "user.model.ts".
        // Και αποθηκεύτηκε πρωσωρινά σε μια σταθερά με το όνομα newUser.
        const newUser = new this.userModel(user);

        // Στην επόμενη γραμμή το object: user που μέχρι πρότεινος ήταν αποθηκευμένο απλώς σε μια σταθερά, πλέον θα αποθηκευτεί στην βάση δεδομένων.
        newUser.save();


        return await this.userModel.findById(newUser._id)
    }

    async upadateAUserService(id: string, user: IUser): Promise<IUser> {
        this.logger.log('Try to update a user...');

        let oldUserFromDb = await this.userModel.findById(id).exec();
        let newUserFromFront = user

        oldUserFromDb.firstName = newUserFromFront.firstName
        oldUserFromDb.lastName = newUserFromFront.lastName
        oldUserFromDb.email = newUserFromFront.email
        oldUserFromDb.password = newUserFromFront.password
        oldUserFromDb.telphone = newUserFromFront.telphone
        oldUserFromDb.role = newUserFromFront.role
        oldUserFromDb.gender = newUserFromFront.gender

        oldUserFromDb.lastUpdated = new Date()

        oldUserFromDb.save()

        return oldUserFromDb
    }

    // Πρόσεξε ότι εδώ το Promise υπόσχεται τύπο <any>.
    async deleteAUserService(id: string): Promise<any> {
        this.logger.log('Try to delete a user...');

        await this.userModel.remove(id).exec();

        let messageOfSuccess = 'success'
        return messageOfSuccess
    }

}