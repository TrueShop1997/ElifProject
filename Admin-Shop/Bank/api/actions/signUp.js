import mongoose from 'mongoose';

import '../models/user';

const User = mongoose.model('User');


export default function addNewUser(req) {
  console.log('addNewUser start');
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      load(req).then(data => {
        const user = req.body;
        req.session.user = user;
        resolve(user);
      }, err => {
        reject(err);
      });
    }, 1500); // simulate async db write
  });
}