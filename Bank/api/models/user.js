import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName : {type: String, required: true},
  eMail    : {type: String, required: true},
  password : {type: String, required: true},
  cards    : [
    {
      number : {type: Number },
      pin    : {type: Number },
      balance: {type: Number },
      owner  : {type: Schema.ObjectId}
    }
  ]
});

export const User = mongoose.model("User", UserSchema);

