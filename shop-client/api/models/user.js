import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-as-promised';

const UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String, default: '' },
    address: { type: String, default: '' },
    email: { type: String, lowercase: true, index: true, unique: true, default: '' },
    password: {type: String },
    isAdmin: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() },
    facebookId: String,
    bankId: { type: String, default: '' }
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

export default mongoose.model('User', UserSchema);
