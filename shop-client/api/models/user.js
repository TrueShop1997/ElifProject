import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-as-promised';

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, lowercase: true, index: true, unique: true, required: true },
    password: {type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true }
    /* cards: [{
      number: {type: String, unique: true},
      CVV: Number,
      month: Number,
      year: number
    }] */
});

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;
    next();
});

UserSchema.methods.comparePasswords = function (password) {
    return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', UserSchema);
