import * as mongoose from 'mongoose';

// This is the interface of the object: user. We need to describe it here in order for our back-end language to understand what we mean by "user".
export interface IUser extends mongoose.Document {
    firstName: string
    lastName: string
    email: string
    password: string
    telphone: string
    role: EUserRole
    gender: EGender
    createdAt: Date
    lastUpdated: Date
    lastLoggedAt: Date
}

export enum EUserRole {
    ADMIN = 'ADMIN',
    SUPERADMIN = 'SUPERADMIN',
    MODERATOR = 'MODERATOR',
    REGISTERED = 'REGISTERED',
    OWNER = 'OWNER'
}

export enum EGender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}





// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






// This is the Schema of the object: user. We need to tell the database what to expect when I'm asking it to save an object: user.
export const UserSchema = new mongoose.Schema({
    //Θα σου δώσω μερικά πραδείγματα των τρόπων που υπάρχουν για να δηλώσεις ένα schema:

    // Ο πιο απλός: Απλώς αναφέρεις το όνομα του variable και δίπλα λες τι τύπος είναι.
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    // Ένα βήμα παρα πέρα: Αναφέρεις το όνομα του variable και ανοίγεις άγκιστρα για να δώσεις και άλλες πληροφορίες εκτός από τον τύπο.
    // Πληροφορίες όπως το κατά πόσο είναι υποχρεωτικό να δωθεί μια τιμή για το συγκεκριμένο variable.
    // Ή το εάν χρειάζεται να έχει index ενεργοποιημένο για να το βρίσκουμε ταχύτερα με μια αναζήτηση.
    // Ή το εάν θα πέρνει μια σyγκεκριμένη default τιμή όταν δημιουργήται.
    email: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    telphone: {
        type: String,
        required: false,
        index: true
    },

    role: {
        type: EUserRole,
        required: false,
        default: 'REGISTERED'
    },
    gender: {
        type: EGender,
        required: true
    },

    //Πρόσεξε τι θα κάνω εδώ στα παρακάτω: Τους δίνω default τιμή από εδώ. Αυτό σημαίνει ότι δεν θα χρειαστεί να θυμηθώ να το κάνω από το service, όταν θα φτειάχνω ένα object χρήστη για πρώτη φορά.
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
    lastLoggedAt: {
        type: Date,
        required: true,
        default: new Date()
    },
})